import React from "react";
import "./App.scss";
import Homepage from "./components/pages/Home";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./components/pages/Shop";
import Header from "./components/helper/Header.js";
import SignInPage from "./components/pages/SignIn";
import Container from "@material-ui/core/Container";
import NotFound from "./components/utils/404";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSuscribeFromAuth = null;

  componentDidMount = () => {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      this.setState({ currentUser: user });
      createUserProfileDocument(user);
    });
  };

  componentWillUnmount = () => {
    this.unSuscribeFromAuth();
  };

  render() {
    return (
      <div className="main-wrapper">
        <Header currentUser={this.state.currentUser} />
        <div className="content-wrappper">
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/" component={Homepage}></Route>
              <Route path="/hats" component={ShopPage}></Route>
              <Route path="/jackets" component={ShopPage}></Route>
              <Route path="/winter" component={ShopPage}></Route>
              <Route path="/womens" component={ShopPage}></Route>
              <Route path="/mens" component={ShopPage}></Route>
              <Route path="/sneakers" component={ShopPage}></Route>
              <Route path="/jackets" component={ShopPage}></Route>
              <Route path="/shop" component={ShopPage}></Route>
              <Route
                path="/sign-in"
                component={() => (
                  <SignInPage currentUser={this.state.currentUser} />
                )}
              ></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
