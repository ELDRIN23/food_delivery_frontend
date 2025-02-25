import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import AdminDishCards from "./AdminDishCards";


const AdminDishes = () => {
 

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
   
   
              <AdminDishCards />
  
  
    </div>
  );
};

export default AdminDishes;

// key={dishes._id || index} dishes={dishes} onDelete={handleDeleteDish}