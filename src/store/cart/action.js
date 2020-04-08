import { appLoading, appDoneLoading } from "../appState/actions";
import { useSelector } from "react-redux";
import { selectAllInventory } from "../../store/inventory/selector";
import { selectCart } from "../cart/selector";

export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_CAR_FROM_CART = "REMOVE_CAR_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (car) => {
  return (dispatch) => {
    console.log("Prodcut added!");
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: car,
    });
  };
};

export const removeCarFromCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_CAR_FROM_CART,
      payload: id,
    });
  };
};


export const addCarToCart = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const inventory = selectAllInventory(getState());

    const filteredCar = inventory.filter(car => car.id === id)
    dispatch(addToCart(filteredCar));
    dispatch(appDoneLoading());
  }
}

export const emptyCart = () => {
  return {
    type: CLEAR_CART
  }
}

