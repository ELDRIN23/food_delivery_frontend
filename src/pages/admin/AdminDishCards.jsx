

// import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../../config/axiosInstance";

// const AdminDishCards = () => {
//   const [dishList, setDishList] = useState([]);

//   const fetchDishes = async () => {
//     try {
//       const response = await axiosInstance.get("/admin/fetch-dishes/");
//       console.log(response.data);
//       setDishList(response.data || []); // Ensure response.data is an array
//     } catch (err) {
//       console.error("Error fetching dishes:", err);
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   const deleteDish = async (dishId) => {
//     try {
//       await axiosInstance.delete(`/dishes/delete-dish/${dishId}`); // Send ID in URL
//       setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== dishId)); // Update UI
//       console.log(`Dish ${dishId} deleted successfully`);
//       fetchDishes(); // Refresh list after deletion
//     } catch (err) {
//       console.error("Error deleting dish:", err);
//     }
//   };
  
  

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Dish List</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {dishList.length > 0 ? (
//           dishList.map((dish) => {
//             const imageUrl = dish.image.length > 0 ? dish.image[0] : "https://via.placeholder.com/150"; // Use first image or placeholder

//             return (
//               <div
//                 key={dish._id}
//                 className="bg-slate-900  text-white shadow-md rounded-lg p-4 border border-gray-200 transition-transform transform hover:scale-105"
//               >
//                 <h3 className="text-lg font-semibold">{dish.name}</h3>
//                 <p className="text-sm">Rating: <span className="font-medium">{dish.rating}</span></p>
                
//                 {dish.restaurant_id && dish.restaurant_id.name && (
//                   <p className="text-sm">Restaurant: {dish.restaurant_id.name}</p>
//                 )}

//                 <img
//                   src={imageUrl}
//                   alt={dish.name}
//                   className="w-full h-32 object-cover mt-3 rounded-md"
//                 />
//                 <button className="bg-red-400 p-2 rounded-lg" onClick={()=>deleteDish(dish._id)}>delete</button>
//               </div>
//             );
//           })
//         ) : (
//           <p className="text-gray-500 text-center col-span-full">No dishes available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDishCards;







import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";

const AdminDishCards = () => {
  const [dishList, setDishList] = useState([]);

  // Fetch dishes from the backend
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

  // Delete dish function
  const deleteDish = async (dishId) => {
    try {
      await axiosInstance.delete(`/dishes/delete-dish/${dishId}`);
      setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== dishId)); // Update UI
      console.log(`Dish ${dishId} deleted successfully`);
      fetchDishes(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen flex justify-end"> 
      {/* Cards Wrapper Aligned to Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl ml-auto pr-6">  
        {dishList.length > 0 ? (
          dishList.map((dish) => {
            const imageUrl = dish.image.length > 0 ? dish.image[0] : "https://via.placeholder.com/150";

            return (
              <div
                key={dish._id}
                className="bg-slate-900 text-white shadow-md rounded-xl p-4 border border-gray-200 transition-transform transform hover:scale-105"
              >
                {/* Dish Name */}
                <h3 className="text-lg sm:text-xl font-semibold">{dish.name}</h3>

                {/* Rating */}
                <p className="text-sm sm:text-base">
                  Rating: <span className="font-medium">{dish.rating}</span>
                </p>

                {/* Restaurant Name */}
                {dish.restaurant_id && dish.restaurant_id.name && (
                  <p className="text-sm sm:text-base">
                    Restaurant: {dish.restaurant_id.name}
                  </p>
                )}

                {/* Dish Image */}
                <img
                  src={imageUrl}
                  alt={dish.name}
                  className="w-full h-40 sm:h-48 object-cover mt-3 rounded-md"
                />

                {/* Delete Button */}
                <button
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                  onClick={() => deleteDish(dish._id)}
                >
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No dishes available
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminDishCards;
