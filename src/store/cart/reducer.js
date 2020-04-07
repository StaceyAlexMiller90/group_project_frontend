import {ADD_PRODUCT_TO_CART} from './action';

const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, ...action.payload]

    default:
        return state;
  }
}