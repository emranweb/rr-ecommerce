import React from "react";
import "./App.scss";

//home page
import Home from "./pages/home.js";


class App extends React.Component{
 render(){
   return (
     <div>
       <Home />
     </div>
   )
 }
}

export default App;