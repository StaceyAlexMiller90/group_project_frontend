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
      const response = await axios.get(`${apiUrl}/inventory/${id}`)
      dispatch(inventoryFetched(response.data))
    } catch(e) {
      console.log(e.message)
    } 
    dispatch(appDoneLoading)
  }
}