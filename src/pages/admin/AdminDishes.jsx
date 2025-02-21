import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import AdminDishCards from "./AdminDishCards";


const AdminDishes = () => {
  // const [dishList, setDishList] = useState([]);

  // const fetchDishes = async () => {
  //   try {
  //     const response = await axiosInstance.get("/admin/fetch-dishes/");
  //     console.log(response.data)
  //     setDishList(response?.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchDishes();
  // }, []);

  // const handleDeleteDish = (id) => {
  //   setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== id));
  // };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
   
   
              <AdminDishCards />
  
  
    </div>
  );
};

export default AdminDishes;

// key={dishes._id || index} dishes={dishes} onDelete={handleDeleteDish}