import React from "react";
import { useNavigate } from "react-router-dom";

const OutletComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
          alt="Food Cartoon"
          className="mx-auto w-40 h-40"
        />
        <h2 className="text-3xl font-bold mt-6">Why Choose Foodie?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg">Millions of Users</h3>
            <p className="text-base">Join a massive community of food lovers worldwide.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg">24/7 Customer Service</h3>
            <p className="text-base">Our team is always here to assist you, anytime.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg">Most Trusted Since 1997</h3>
            <p className="text-base">Serving deliciousness with trust for over two decades.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <h3 className="font-semibold text-lg">Award-Winning Service</h3>
            <p className="text-base">Recognized globally for our outstanding service.</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/Signup")}
          className="mt-8 bg-purple-800 text-white hover:bg-purple-900 px-8 py-4 text-lg font-medium rounded-md"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OutletComponent;



