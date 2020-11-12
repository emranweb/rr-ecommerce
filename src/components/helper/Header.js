import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropDown from "./CartDropDown";
import cartAction from "../../redux/cartAction";

function Header(props) {

  const showCart= (props)=>{
    
  }

  return (
    <div className="header-wrapper">
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <h6 className="logo">
              <Link to="/">Logo</Link>
            </h6>

            <div className="menu">
              <Button>
                <Link to="/shop">Shop</Link>
              </Button>
              {props.currentUser ? (
                <Button color="inherit" onClick={() => auth.signOut()}>
                  Sign Out
                </Button>
              ) : (
                <Button>
                  {" "}
                  <Link to="/sign-in">Sign In</Link>{" "}
                </Button>
              )}
              <Button onClick={showCart}>
                <CartIcon />
              </Button>
            </div>
            <CartDropDown show={true}/>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


const mapDispatchToProps  = dispatch=>({
   cartChange: item=>dispatch(cartAction(item))
})


const mapStateToProps = (state) => ({
  currentUser: state.user,
  cartReducer: state.cart
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
