

import React from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../service/cartManagement";

export const DishCards = ({ dishes }) => {
  console.log("dishesCard====", dishes);
  const navigate = useNavigate();
  const handleaddToCart = async () => {
    console.log(
      `user_id,
    dish_id,
    dish_name,
    quantity,
    price_per_item`,
      dishes
    );
    try {
      const res = await addToCart(dishes._id, dishes.name, 1, dishes.price)
      navigate("/cart")
    } catch (error) {}
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={dishes?.image} alt="dish" />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{dishes?.name}</h1>
        <p>{dishes?.description}</p>
        <p>price: {dishes?.price} Rs</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleaddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
