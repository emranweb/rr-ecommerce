import React from "react";
import "./App.scss";
import {Route, Switch} from "react-router-dom";

//home page
import Home from "./pages/home.js";

const NotFound = ()=>{
   return (
     <h1>Page Not Found</h1>
   )
}

class App extends React.Component{
 render(){
   return (
    <Switch>
       <Route exact path="/" component={Home} />
       <Route component={NotFound} />
    </Switch>
   )
 }
}

export default App;