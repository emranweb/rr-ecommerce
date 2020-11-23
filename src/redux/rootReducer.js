import { combineReducers } from "redux";

import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";



export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
