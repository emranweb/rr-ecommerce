import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartShow from "./cartshow";
import cartReducer from "./cart";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import directory from "./directory";
import shop from "./shop";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const reducers = combineReducers({
  user: userReducer,
  show: cartShow,
  cart: cartReducer,
  directory: directory,
  shop:shop
});

const persisConfg = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistReducers = persistReducer(persisConfg, reducers);

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
