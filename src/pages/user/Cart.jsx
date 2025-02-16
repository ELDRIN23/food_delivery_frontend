import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance"; // Import Axios instance

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch Cart Items from Backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosInstance.get("/cart/get", {
          params: { user_id: "user123" }, // Replace with actual user ID
        });
        setCartItems(response.data.cart); // Assuming API returns { cart: [...] }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Remove Item from Cart
  const removeFromCart = async (dishId) => {
    try {
      const response = await axiosInstance.delete("/cart/remove", {
        data: { user_id: "user123", dish_id: dishId }, // Backend requires `data` in DELETE request
      });

      if (response.status === 200) {
        setCartItems(cartItems.filter((item) => item.dish_id !== dishId));
        alert("Item removed!");
      } else {
        alert("Failed to remove item.");
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="flex-grow flex flex-col items-center px-20 py-16">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {cartItems.map((item) => (
              <div key={item.dish_id} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src={item.image} alt="dish" className="w-full h-40 object-cover" />
                </figure>
                <div className="card-body">
                  <h1 className="card-title">{item.dish_name}</h1>
                  <p>Price: {item.price_per_item} Rs</p>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromCart(item.dish_id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
