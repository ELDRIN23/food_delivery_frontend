import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../service/cartManagement";

export const DishCards = ({ dishes }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      await addToCart(dishes._id, dishes.name, 1, dishes.price);
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-80 md:w-96 transform transition duration-300 hover:scale-105">
      {/* Dish Image */}
      <figure className="h-48">
        <img
          src={dishes?.image}
          alt={dishes?.name}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Dish Details */}
      <div className="p-5">
        <h1 className="text-xl font-semibold mb-2">{dishes?.name}</h1>
        <p className="text-gray-400 text-sm mb-3">{dishes?.description}</p>
        <p className="text-yellow-400 font-semibold mb-4">
          Price: {dishes?.price} Rs
        </p>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition duration-300"
          onClick={handleAddToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
