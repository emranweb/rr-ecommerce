import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartShow from "./cartshow";

const store = configureStore({
  reducer: {
    user: userReducer,
    show: cartShow,
  },
});

export default store;
