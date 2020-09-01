import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage.component.js";
import {Route, Switch, Link} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.js";
import Header from "./components/header/header.component.js";
import SignInPage from "./pages/sign-in/sign-in.page.js";
import {auth, createUserProfileDoc} from "./firebase/firebase-utils.js";



class App extends React.Component{
    constructor(){
      super();
      this.state={
        currentUser:null
      }
    }


    unSubscribeFromAuth = null;

    componentDidMount(){
      this.unSubscribeFromAuth= auth.onAuthStateChanged(async user=>{
         createUserProfileDoc(user);
         
        })
       
    }

    componentWillUnmount(){
       this.unSubscribeFromAuth();
    }


    render(){
      return (
        <div>
          <Header  currentUser={this.state.currentUser}/>
          <Switch>
             <Route exact  path="/" component={Homepage}></Route>
             <Route  path="/hats" component={ShopPage}></Route>
             <Route  path="/shop" component={ShopPage}></Route>
             <Route  path="/sign-in" component={SignInPage}></Route>
          </Switch>
    
        </div>
      );
    }

}

export default App;
