import React, { useEffect, useState } from 'react'
import { DishCards } from '../../components/User/Cards'
import { axiosInstance } from '../../config/axiosInstance'
// import { useFetch } from '../../hooks/useFetch'

const Dishes = () => {
  const[dishList,setDishList]=useState([])

  const fetchDishes = async()=>{
    try {
      // console.log("hitted")
      const response = await axiosInstance({
        method:"GET",
        url:"/dishes/",
      });
      console.log("response====", response);
      setDishList(response?.data)
    } catch (err) {
      console.log(err);
      
    }
  }
   
useEffect(()=>{
  fetchDishes()
},[])

// const[]=useFetch("/dishes/")
//////////////////////////////////////////////////////////////
// export const Dishes = () => {
//   const [dishList, setDishList] = useState([]);

//   useEffect(() => {
//     axiosInstance
//       .get("/dishes/")
//       .then((res) => {
//         console.log(res.data);
//         setDishList(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);
///////////////////////////////////////////////////////////////
  return (
    

<div className="flex flex-col items-center justify-start px-20 py-16">
<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
  {dishList?.length > 0 ? (
    dishList.map((dishes, index) => (
      <DishCards key={dishes?._id || index} dishes={dishes} />
    ))
  ) : (
    <p className="text-gray-500 text-center col-span-full">No dishes available</p>
  )}
</section>
</div>
  )
}



export default Dishes