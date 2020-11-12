import { combineReducers } from "redux";

import cartIconReducer from "./reducer/cartIconReducer";
import userReducer from "./reducer/userReducer";

export default combineReducers({
  user: userReducer,
  cartIcon: cartIconReducer,
});
