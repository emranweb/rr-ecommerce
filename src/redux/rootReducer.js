import { combineReducers } from "redux";

import cartIconReducer from "./reducer/cartIconReducer";
import userReducer from "./reducer/userReducer";
import cartItems from "./reducer/cartItemsReducer";

export default combineReducers({
  user: userReducer,
  cartIcon: cartIconReducer,
  cartItems: cartItems
});
