import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./com/header";

//home page
import Home from "./pages/home.js";
import Shop from "./pages/shop.js";
import SignIn from "./pages/signIn";
import CheckoutPage from "./pages/checkout";


const NotFound = () => {
  return <h1>Page Not Found</h1>;
};

const Hats = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hats" component={Hats} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route  component={NotFound} />
       
      </Switch>
    </div>
  );
}

export default App;
