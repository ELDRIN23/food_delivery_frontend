

// import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../../config/axiosInstance";

// const AdminDishCards = () => {
//   const [dishList, setDishList] = useState([]);
//   const [editDish, seteditDish] = useState({});

//   // Fetch dishes from the backend
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

//   // Delete dish function
//   const deleteDish = async (dishId) => {
//     try {
//       await axiosInstance.delete(`/dishes/delete-dish/${dishId}`);
//       setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== dishId)); // Update UI
//       console.log(`Dish ${dishId} deleted successfully`);
//       fetchDishes(); // Refresh list after deletion
//     } catch (err) {
//       console.error("Error deleting dish:", err);
//     }
//   };

//   // updateDishPrice
//   function handleEditDish(e) {

//     seteditDish({
      
//       ...editDish,
        
//         [e.target.name]: e.target.value

//         })
//        console.log(editDish)
//     }

//  function updateDish(id){
//   axiosInstance({
//     method: 'PUT',
//     url: `/dishes/${id}`,
//     data: editDish,
// })
//     .then((res) => {
//         console.log('res :>> ', res);
    
//     })
//     .catch((err) => {
//         console.log('err :>> ', err);
     
//     })
//       
//          
//   }

//   return (
//     <div className="p-4 sm:p-6 bg-gray-50 min-h-screen flex justify-end"> 
//       {/* Cards Wrapper Aligned to Right */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl ml-auto pr-6">  
//         {dishList.length > 0 ? (
//           dishList.map((dish) => {
//             const imageUrl = dish.image.length > 0 ? dish.image[0] : "https://via.placeholder.com/150";

//             return (
//               <div
//                 key={dish._id}
//                 className="bg-slate-900 text-white shadow-md rounded-xl p-4 border border-gray-200 transition-transform transform hover:scale-105"
//               >
//                 {/* Dish Name */}
//                 <h3 className="text-lg sm:text-xl font-semibold">{dish.name}</h3>

//                 {/* Rating */}
//                 <p className="text-sm sm:text-base">
//                   Rating: <span className="font-medium">{dish.rating}</span>
//                 </p>

//                 {/* Restaurant Name */}
//                 {dish.restaurant_id && dish.restaurant_id.name && (
//                   <p className="text-sm sm:text-base">
//                     Restaurant: {dish.restaurant_id.name}
//                   </p>
//                 )}
//                   {/* price */}
//                 <h3 className="text-lg sm:text-xl font-semibold">price: {dish.price}</h3>

//                 {/* Dish Image */}
//                 <img
//                   src={imageUrl}
//                   alt={dish.name}
//                   className="w-full h-40 sm:h-48 object-cover mt-3 rounded-md"
//                 />

//                 {/* Delete Button */}
//                 <button
//                   className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition duration-300"
//                   onClick={() => deleteDish(dish._id)}
//                 >
//                   Delete
//                 </button>

//                 {/* update button */}
//                 <div>
//                   <div>edit</div>
//                  <div>
//                   <div>
//                     <input placeholder="name"  onChange={handleEditDish}
//                          name="name" type = "text"/>
//                   </div>
//                   <div>
//                     <input placeholder="rating" name="rating"  onChange={handleEditDish}
//                        type = "text"/>
//                   </div>
//                   <div>
//                     <input placeholder="price" name="price"  onChange={handleEditDish}
//                        type = "text"/>
//                   </div>
//                  </div>
//                  <button onClick={() => updateDish(dish._id)}>Update</button>

//                 </div>


//               </div>
//             );
//           })
//         ) : (
//           <p className="text-gray-500 text-center col-span-full">
//             No dishes available
//           </p>
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
  const [editDish, seteditDish] = useState({});

  const fetchDishes = async () => {
    try {
      const response = await axiosInstance.get("/admin/fetch-dishes/");
      setDishList(response.data || []);
    } catch (err) {
      console.error("Error fetching dishes:", err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const deleteDish = async (dishId) => {
    try {
      await axiosInstance.delete(`/dishes/delete-dish/${dishId}`);
      setDishList((prevDishes) => prevDishes.filter((dish) => dish._id !== dishId));
      fetchDishes();
    } catch (err) {
      console.error("Error deleting dish:", err);
    }
  };

  const handleEditDish = (e) => {
    seteditDish({ ...editDish, [e.target.name]: e.target.value });
  };

  const updateDish = (id) => {
    axiosInstance.put(`/dishes/${id}`, editDish)
      .then((res) => {
        console.log("Dish updated successfully:", res);
        fetchDishes();
        seteditDish({});
      })
      .catch((err) => {
        console.error("Error updating dish:", err);
      });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Dish List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dishList.length > 0 ? (
          dishList.map((dish) => {
            const imageUrl = dish.image.length > 0 ? dish.image[0] : "https://via.placeholder.com/150";

            return (
              <div key={dish._id} className="bg-slate-900 text-white shadow-lg rounded-lg p-4 border transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                <p className="text-sm mb-1">Rating: <span className="font-medium">{dish.rating}</span></p>
                {dish.restaurant_id?.name && <p className="text-sm mb-1">Restaurant: {dish.restaurant_id.name}</p>}
                <h3 className="text-lg font-semibold mb-3">Price: {dish.price}</h3>
                <img src={imageUrl} alt={dish.name} className="w-full h-40 object-cover mb-3 rounded-md" />
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mb-3" onClick={() => deleteDish(dish._id)}>Delete</button>
                <div className="bg-white p-3 rounded-lg">
                  <div className="mb-2">
                    <input className="w-full p-2 border rounded-lg" placeholder="Name" name="name" onChange={handleEditDish} type="text" />
                  </div>
                  <div className="mb-2">
                    <input className="w-full p-2 border rounded-lg" placeholder="Rating" name="rating" onChange={handleEditDish} type="text" />
                  </div>
                  <div className="mb-2">
                    <input className="w-full p-2 border rounded-lg" placeholder="Price" name="price" onChange={handleEditDish} type="text" />
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg" onClick={() => updateDish(dish._id)}>Update</button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">No dishes available</p>
        )}
      </div>
    </div>
  );
};

export default AdminDishCards;
