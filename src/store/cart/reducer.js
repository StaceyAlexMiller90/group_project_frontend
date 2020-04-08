import { ADD_PRODUCT_TO_CART, REMOVE_CAR_FROM_CART, CLEAR_CART } from "./action";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      localStorage.setItem(
        "cart",
        JSON.stringify([...state, ...action.payload])
      );
      return [...state, ...action.payload];

    case REMOVE_CAR_FROM_CART:
      console.log("Action payload", action.payload);
      console.log("state", state);

      var idx = state.findIndex((car) => car.id === action.payload);

      if (idx >= 0) {
        var removedCar = state.splice(idx, 1);
      }

      console.log("IDX", idx);

      console.log("Removed Car", removedCar);
      console.log("New State", state);

      localStorage.setItem("cart", JSON.stringify([...state]));

      return [...state];
    
    case CLEAR_CART:
      return initialState

    default:
      return state;
  }
};
