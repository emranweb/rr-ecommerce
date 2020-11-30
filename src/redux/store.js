import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {persistStore} from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware());
export const persistor  = persistStore(store);