import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./com/header";

//home page
import Home from "./pages/home.js";
import Shop from "./pages/shop.js";

const NotFound = () => {
  return <h1>Page Not Found</h1>;
};

const Hats = () => {
  return <h1>Hats Page</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hats" component={Hats} />
          <Route exact path="/shop" component={Shop} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
