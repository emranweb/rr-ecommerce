import { combineReducers } from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducer/userReducer";
import cartReducer from "./reducer/cartReducer";
import directoryReducer from './reducer/directoryReductor';
import shopReducer from './reducer/shopReducer';

const persistConfig =   {
  key:"root",
  storage,
  whitelist: ["cart"]
}




const rooReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rooReducer)