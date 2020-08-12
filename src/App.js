import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.js";
import {Route, Switch, Link} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.js";


function Hatpage (){
  return (
    <div>
     <h1>Helo World</h1>  
    </div>
    
  )
}




function TopicDetails (props){
  return (
    <div>
      <h1>Helo World: {props.match.params.topicId}</h1>
    </div>
  )
}



function App() {
  return (
    <div>
      
      <Switch>
         <Route exact  path="/" component={Homepage}></Route>
         <Route  path="/hats" component={Hatpage}></Route>
         <Route  path="/shop" component={ShopPage}></Route>
      </Switch>

    </div>
  );
}

export default App;
