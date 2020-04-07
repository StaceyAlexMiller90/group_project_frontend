import {ADD_PRODUCT_TO_CART} from './action';


const initialState = JSON.parse(localStorage.getItem("cart")) || []

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      localStorage.setItem("cart", JSON.stringify([...state, ...action.payload]));
      return [...state, ...action.payload]

    default:
        return state;
  }
}