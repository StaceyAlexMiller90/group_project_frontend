import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import inventory from './inventory/reducer';

export default combineReducers({
  appState,
  user,
  inventory
});
