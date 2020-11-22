import { combineReducers } from "redux";

import cartIconReducer from "./reducer/cartIconReducer";
import userReducer from "./reducer/userReducer";
import cartItems from "./reducer/cartItemsReducer";
import cartRemoveReducer from "./reducer/cartRemoveReducer";


export default combineReducers({
  user: userReducer,
  cartIcon: cartIconReducer,
  cartItems: cartItems,
  cartRemove:cartRemoveReducer,
});
