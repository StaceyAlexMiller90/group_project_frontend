import {appLoading, appDoneLoading} from '../appState/actions';
import { useSelector } from 'react-redux';
import {selectAllInventory} from '../../store/inventory/selector';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addToCart = (car) => {
  return{
      type: ADD_PRODUCT_TO_CART,
      payload: car
    }
}

export const addCarToCart = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    const inventory = selectAllInventory(getState());
    const filteredCar = inventory.filter(car => car.id === parseInt(id))
    dispatch(addToCart(filteredCar));
    dispatch(appDoneLoading());
  }
}