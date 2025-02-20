import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import AdminDishCards from "./AdminDishCards";


const AdminDishes = () => {
  const [dishList, setDishList] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await axiosInstance.get("/admin/fetch-dishes/");
      console.log(response.data)
      setDishList(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleDeleteDish = (id) => {
    setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-start px-20 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Dishes Dashboard</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {dishList.length > 0 ? (
            dishList.map((dishes, index) => (
              <AdminDishCards key={dishes._id || index} dishes={dishes} onDelete={handleDeleteDish} />
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No dishes available
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default AdminDishes;
