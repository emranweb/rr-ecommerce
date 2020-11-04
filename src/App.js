import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component.js";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.js";
import Header from "./components/header/header.component.js";
import SignInPage from "./pages/sign-in/sign-in.page.js";
import { auth, createUserProfileDoc } from "./firebase/firebase-utils.js";
import Container from "@material-ui/core/Container";
import NotFound from "./components/404/404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDoc(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="main-wrapper">
         <Header currentUser={this.state.currentUser} />
        <div className="content-wrappper">
          <Container maxWidth="lg">
            <Switch >
              <Route exact path="/" component={Homepage}></Route>
              <Route path="/hats" component={ShopPage}></Route>
              <Route path="/shop" component={ShopPage}></Route>
              <Route path="/sign-in" component={SignInPage}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
