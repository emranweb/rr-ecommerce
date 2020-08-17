import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.js";
import {Route, Switch, Link} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.js";




function App() {
  return (
    <div>
      
      <Switch>
         <Route exact  path="/" component={Homepage}></Route>
         <Route  path="/hats" component={ShopPage}></Route>
         <Route  path="/shop" component={ShopPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
