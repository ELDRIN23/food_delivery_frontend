// import { axiosInstance } from "../../config/axiosInstance";

// const AdminDishCards = ({ dishes, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       await axiosInstance.delete(`/dishes/${dishes._id}`);
//       onDelete(dishes._id); // Update the state in the parent component
//     } catch (error) {
//       console.error("Error deleting dish:", error);
//     }
//   };

//   return (
//     <div className="bg-gray-800 p-4 rounded-lg">
//       <h2 className="text-xl font-bold">{dishes.name}</h2>
//       <p>{dishes.description}</p>
//       <p>{dishes.restaurant_id.name}</p> 
//       <button
//         onClick={handleDelete}
//         className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
//       >
//         Delete
//       </button>
//     </div>
//   );
// };

// export default AdminDishCards;




import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

const AdminDishCards = () => {
  const [dishList, setDishList] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await axiosInstance.get("/admin/fetch-dishes/");
      console.log(response.data);
      setDishList(response.data || []); // Ensure response.data is an array
    } catch (err) {
      console.error("Error fetching dishes:", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (dishId) => {
    try {
      await axiosInstance.delete(`/dishes/delete-dish/${dishId}`); // Send ID in URL
      setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== dishId)); // Update UI
      console.log(`Dish ${dishId} deleted successfully`);
      fetchDishes(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };
  
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dish List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishList.length > 0 ? (
          dishList.map((dish) => {
            const imageUrl = dish.image.length > 0 ? dish.image[0] : "https://via.placeholder.com/150"; // Use first image or placeholder

            return (
              <div
                key={dish._id}
                className="bg-slate-900  text-white shadow-md rounded-lg p-4 border border-gray-200 transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold">{dish.name}</h3>
                <p className="text-sm">Rating: <span className="font-medium">{dish.rating}</span></p>
                
                {dish.restaurant_id && dish.restaurant_id.name && (
                  <p className="text-sm">Restaurant: {dish.restaurant_id.name}</p>
                )}

                <img
                  src={imageUrl}
                  alt={dish.name}
                  className="w-full h-32 object-cover mt-3 rounded-md"
                />
                <button className="bg-red-400 p-2 rounded-lg" onClick={()=>deleteDish(dish._id)}>delete</button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center col-span-full">No dishes available</p>
        )}
      </div>
    </div>
  );
};

export default AdminDishCards;


