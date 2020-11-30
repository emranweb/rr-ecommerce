import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {store, persistor} from "./redux/store";
import {Provider} from "react-redux";
import {persistGate} from "redux-persist/integration/react";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <persistGate persistor={persistor}>
    <App />
    </persistGate>
      
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
