import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";

const inventoryFetched = inventory => {
  return {
    type: 'FETCH_INVENTORY_BY_ID',
    payload: inventory
  }
}

export const fetchInventoryById = (id) => {
  return async (dispatch, getState) => {
    dispatch(appLoading)
    try {
      console.log(id, 'This is the ID I am trying to get')
      // const response = await axios.get(`${apiUrl}/cars/${id}`)
      // dispatch(inventoryFetched(response.data))
    } catch(e) {
      console.log(e.message)
    } 
    dispatch(appDoneLoading)
  }
}