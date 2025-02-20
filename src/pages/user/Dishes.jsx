import React, { useEffect, useState } from "react";
import { DishCards } from "../../components/User/Cards";
import { axiosInstance } from "../../config/axiosInstance";

const Dishes = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDishes = async () => {
    try {
      const res = await axiosInstance.get("/resturant/dishes");
      setRestaurants(res.data.data);
    } catch (err) {
      setError("Failed to load dishes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center px-6 md:px-16 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
          Our Dishes
        </h1>

        {/* Loading State */}
        {loading && <p className="text-lg text-gray-400">Loading dishes...</p>}
        {error && <p className="text-lg text-red-500">{error}</p>}

        {/* Restaurant List */}
        <div className="w-full max-w-6xl">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
              >
                {/* Restaurant Name */}
                <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
                  {restaurant.name}
                </h2>

                {/* Dishes Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {restaurant.dishes.length > 0 ? (
                    restaurant.dishes.map((dish, index) => (
                      <DishCards key={dish?._id || index} dishes={dish} />
                    ))
                  ) : (
                    <p className="text-gray-400 col-span-full text-center">
                      No dishes available
                    </p>
                  )}
                </section>
              </div>
            ))
          ) : (
            !loading && (
              <p className="text-lg text-gray-500 text-center">
                No restaurants available
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dishes;


// import React, { useEffect, useState } from 'react'
// import { DishCards } from '../../components/User/Cards'
// import { axiosInstance } from '../../config/axiosInstance'
// // import { useFetch } from '../../hooks/useFetch'

// const Dishes = () => {
//   const[dishList,setDishList]=useState([])

//   const fetchDishes = async()=>{
//     try {
//       // console.log("hitted")
//       const response = await axiosInstance({
//         method:"GET",
//         url:"/dishes/",
//       });
//       console.log("response====", response);
//       setDishList(response?.data)
//     } catch (err) {
//       console.log(err);

//     }
//   }

// useEffect(()=>{
//   fetchDishes()
// },[])

// // const[]=useFetch("/dishes/")
// //////////////////////////////////////////////////////////////
// // export const Dishes = () => {
// //   const [dishList, setDishList] = useState([]);

// //   useEffect(() => {
// //     axiosInstance
// //       .get("/dishes/")
// //       .then((res) => {
// //         console.log(res.data);
// //         setDishList(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);
// ///////////////////////////////////////////////////////////////
//   return (

// <div className="flex flex-col items-center justify-start px-20 py-16">
// <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
//   {dishList?.length > 0 ? (
//     dishList.map((dishes, index) => (
//       <DishCards key={dishes?._id || index} dishes={dishes} />
//     ))
//   ) : (
//     <p className="text-gray-500 text-center col-span-full">No dishes available</p>
//   )}
// </section>
// </div>
//   )
// }

// export default Dishes
