import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.js";
import {Route, Switch, Link} from "react-router-dom";



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
         <Route  path="/topic/:topicId" component={TopicDetails}></Route>
      </Switch>

    </div>
  );
}

export default App;
