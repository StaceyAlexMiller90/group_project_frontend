import {appLoading, appDoneLoading} from '../appState/actions';
import { useSelector } from 'react-redux';
import {selectAllInventory} from '../../store/inventory/selector';

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addToCart = (car) => {
  return(dispatch) => {
    console.log('Prodcut added!')
    dispatch ({
      type: ADD_PRODUCT_TO_CART,
      payload: car
    })
  }
}

export const addCarToCart = (id) => {
  return async (dispatch, getState) => {
    const inventory = selectAllInventory(getState());
    const filteredCar = inventory.filter(car => car.id === id)
    dispatch(addToCart(filteredCar));
    //dispatch(appLoading());
  }
}