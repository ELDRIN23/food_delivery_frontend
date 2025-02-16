import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../../src/config/axiosInstance';

 const DishDetails = () => {
  const [dish, setDish] = useState(null);  // Initialize as null
  const { id } = useParams();  

  const fetchDish = async () => {
    try {
      const response = await axiosInstance.get(`/dishes/dishDetails/${id}`);
      console.log("response====", response);
      setDish(response.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  useEffect(() => {
    fetchDish();
  }, [id]);  // Include `id` as a dependency

  return (
    <section>
      <h2 className="text-2xl font-bold">Dish Details</h2>
      {dish ? (
        <div>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p>Price: ${dish.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DishDetails