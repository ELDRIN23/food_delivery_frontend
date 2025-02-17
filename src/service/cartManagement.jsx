import { axiosInstance } from "../config/axiosInstance";

export const addToCart = (
  dish_id,
  dish_name,
  quantity,
  price_per_item
) => {
  return axiosInstance.post("/cart/add", {
    dish_id,
    dish_name,
    quantity,
    price_per_item,
  });
};

export const getCartItems = (user_id) => {
  return axiosInstance.get("/cart");
  
 
};

export const updateCartItem = (
  itemId,
  user_id,
  dish_id,
  quantity,
  price_per_item
) => {
  return axiosInstance.put(`/cart/update/${itemId}`, {
    user_id,
    dish_id,
    quantity,
    price_per_item,
  });
};

export const deleteCartItem = (itemId) => {
  return axiosInstance.delete(`/cart/delete/${itemId}`);
};

export const clearCart = (user_id, dish_id) => {
  return axiosInstance.delete("/cart/clear", {
    params: { user_id, dish_id },
  });
};
