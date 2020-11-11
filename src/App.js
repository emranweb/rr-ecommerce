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
import { connect } from "react-redux";
import setCurrentUserAction from "./redux/userAction";

class App extends React.Component {
  constructor() {
    super();
  }

  unSuscribeFromAuth = null;

  componentDidMount = () => {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snap=>{
          this.props.setCurrentUser({
            id:snap.id,
            ...snap.data()
          })
        })
        this.props.setCurrentUser(user);
      }
    });
  };

  componentWillUnmount = () => {
    this.unSuscribeFromAuth();
  };

  render() {
  
    return (
      <div className="main-wrapper">
        <Header />
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
              <Route path="/sign-in" component={() => <SignInPage />}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Container>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});

export default connect(null, mapDispatchToProps)(App);
