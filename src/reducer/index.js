import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { driverReducer } from "./driver";


export default combineReducers({
  auth: authReducer,
  driver: driverReducer
});
