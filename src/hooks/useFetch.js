import { useState } from "react";

export const useFetch = (url) =>{
     const[data,SetData]=useState([])
     const[isLoading, SetIsloading]=useState(true)
     const[error,SetError]=useState(null)
     
   
     const fetchData = async()=>{
       try {
         // console.log("hitted")
         const response = await axiosInstance({
           method:"GET",
           url: url,
         });

         console.log("response====", response);
         SetData(response?.data);
         isLoading(false);
       } catch (err) {
         console.log(err);
         SetError(error);
       }
     }
      
   useEffect(()=>{
    fetchData();
   },[]);

   return [data, isLoading, error];
};