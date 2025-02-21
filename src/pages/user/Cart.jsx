import React, { useEffect, useState } from "react";
import { getCartItems, deleteCartItem, addToCart } from "../../service/cartManagement";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [loadingItem, setLoadingItem] = useState(null);

  // Fetch Cart Items from Backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        setCartItems(response.data.dishes || []);
        setTotalAmount(response.data.total_amount || 0);
        setFinalAmount(response.data.total_amount || 0);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Remove Item from Cart
  const removeFromCart = async (dishId) => {
    setLoadingItem(dishId);
    try {
      const response = await deleteCartItem(dishId);
      if (response.status === 200) {
        setCartItems((prevItems) => prevItems.filter((item) => item?.dish_id._id  !== dishId));
        const removedItem = cartItems.find((item) => item?.dish_id._id  === dishId);
        if (removedItem) {
          setTotalAmount((prev) => prev - removedItem.price_per_item * removedItem.quantity);
          setFinalAmount((prev) => prev - removedItem.price_per_item * removedItem.quantity);
        }
      } else {
        alert("Failed to remove item.");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setLoadingItem(null);
    }
  };

  // Proceed to Payment
  const handleProceedPayment = async () => {
    if (totalAmount <= 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const res = await axiosInstance.post("/user/create-payment-intent", {
        amount: parseInt(totalAmount),
      });

      navigate(`/payment?cid=${res.data.clientSecret}`);
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  // Update Quantity
  const handleUpdateQuantity = async (qty, curDish) => {
    if (loadingItem) return;
    setLoadingItem(curDish.dish_id._id);

    if (curDish.quantity + qty === 0) {
      return removeFromCart(curDish.dish_id._id);
    }

    try {
      await addToCart(curDish.dish_id._id, curDish.dish_name, qty, curDish.price_per_item);
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.dish_id._id  === curDish.dish_id._id
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      );
      setTotalAmount((prev) => prev + qty * curDish.price_per_item);
      setFinalAmount((prev) => prev + qty * curDish.price_per_item);
    } catch (error) {
      console.error("Failed to update cart:", error);
    } finally {
      setLoadingItem(null);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-15.8rem)] bg-gray-900 text-white p-8">
      {/* Cart Items Section */}
      <div className="flex-grow flex flex-col px-10">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {cartItems.map((item) => {
              console.log(item)
              return(
              <div key={item?._id} className="bg-gray-800 p-4 rounded-xl shadow-lg transition transform hover:scale-105">
                <figure>
                  <img src={item?.dish_id.image} alt="dish" className="w-full h-40 object-cover rounded-lg" />
                </figure>
                <div className="mt-3">
                  <h1 className="text-xl font-semibold">{item?.dish_name}</h1>
                  <p className="text-gray-400">Price: {item?.price_per_item} Rs</p>

                  {/* Quantity Control */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleUpdateQuantity(-1, item)}
                      className={`px-3 py-1 bg-gray-600 rounded-l-lg hover:bg-gray-500 ${
                        loadingItem === item.dish_id._id  && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={loadingItem === item.dish_id._id}
                    >
                      -
                    </button>
                    <p className="px-4">{item.quantity}</p>
                    <button
                      onClick={() => handleUpdateQuantity(1, item)}
                      className={`px-3 py-1 bg-gray-600 rounded-r-lg hover:bg-gray-500 ${
                        loadingItem === item.dish_id._id  && "opacity-50 cursor-not-allowed"
                      }`}
                      disabled={loadingItem === item.dish_id._id}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="w-full bg-red-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => removeFromCart(item?.dish_id._id)}
                    disabled={loadingItem === item.dish_id._id}
                  >
                    {loadingItem === item.dish_id._id  ? "Removing..." : "Remove from Cart"}
                  </button>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>

      {/* Checkout Section */}
      <div className="w-1/3 sticky top-20 p-6 bg-gray-800 rounded-xl shadow-lg ml-10">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>
        <div className="mb-4 p-4 bg-gray-700 rounded-lg shadow-md">
          <p className="text-lg">Total Items: <span className="font-semibold">{cartItems.length}</span></p>
          <p className="text-lg">Subtotal: <span className="font-semibold">{totalAmount.toFixed(2)} Rs</span></p>
          {discount > 0 && (
            <p className="text-green-400">Discount Applied: -{discount.toFixed(2)} Rs</p>
          )}
          <p className="text-xl font-semibold mt-2">Final Amount: <span className="text-green-400">{finalAmount.toFixed(2)} Rs</span></p>
        </div>

        {/* Proceed to Payment */}
        <button 
          onClick={handleProceedPayment}
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
