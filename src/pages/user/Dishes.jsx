import React, { useEffect, useState } from "react";
import { DishCards } from "../../components/User/Cards";
import { axiosInstance } from "../../config/axiosInstance";

const Dishes = () => {
  const [dishList, setDishList] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/dishes/",
      });
      setDishList(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
 
  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-start px-20 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Dishes</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {dishList?.length > 0 ? (
            dishList.map((dishes, index) => (
              <DishCards key={dishes?._id || index} dishes={dishes} />
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
