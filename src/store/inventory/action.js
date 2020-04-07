import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";


const allInventoryFetched = inventory => {
  return {
    type: 'FETCH_ALL_INVENTORY',
    payload: inventory
  }
}

export const fetchAllInventory = () => {
  return async (dispatch, getState) => {
    dispatch(appLoading)
    try {
      const response = await axios.get(`${apiUrl}/cars`)
      dispatch(allInventoryFetched(response.data))
      console.log(response.data)
    } catch(e) {
      console.log(e.message)
    } 
    dispatch(appDoneLoading)
  }
}