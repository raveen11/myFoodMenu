import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.types) {
    case ADD_TO_CART:
      return { cartItems: 'action.payload.cartItems' };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};