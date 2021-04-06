import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartShow from "./cartshow";
import cartReducer from './cart';

const store = configureStore({
  reducer: {
    user: userReducer,
    show: cartShow,
    cart:cartReducer
  },
});

export default store;
