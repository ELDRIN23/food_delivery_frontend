import React from 'react'
import { useNavigate } from 'react-router-dom';

export const DishCards = ({dishes}) => {

   console.log('dishesCard====',dishes);
   const navigate = useNavigate();

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={dishes?.image}
      alt="dish" />
  </figure>
  <div className="card-body">
    <h1 className="card-title">{dishes?.name}</h1>
    <p>{dishes?.description}</p>
    <p>price: {dishes?.price} Rs</p>
    <div className="card-actions justify-end">
      
    <button className="btn btn-primary" onClick={()=>navigate(`/dishDetails/${dishes._id}`)}>
        order
        </button>
       
    </div>
  </div>
</div>
  )  
}



// <Link to={`/dishDetails/${dish._id}`}>View Dish</Link>