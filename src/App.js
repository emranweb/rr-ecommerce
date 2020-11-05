import React from "react";
import "./App.css";
import Homepage from "./components/pages/Home";
import { Route, Switch} from "react-router-dom";
import ShopPage from "./components/pages/Shop";
import Header from "./components/helper/Header.js";
import SignInPage from "./components/pages/SignIn";
import { auth, createUserProfileDoc } from "./firebase/firebase-utils.js";
import Container from "@material-ui/core/Container";
import NotFound from "./components/utils/404";

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
              <Route path="/jackets" component={ShopPage}></Route>
              <Route path="/winter" component={ShopPage}></Route>
              <Route path="/womens" component={ShopPage}></Route>
              <Route path="/mens" component={ShopPage}></Route>
              <Route path="/sneakers" component={ShopPage}></Route>
              <Route path="/jackets" component={ShopPage}></Route>
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
