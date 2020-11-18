import React from "react";
import { connect } from "react-redux";
import { cartItemsCount } from "../../redux/cartReselect";

const CartIcon = (props) => {
  return <div className="cart-icon">{props.cartItems}</div>;
};

const mapStateToProps = (state) => ({
  cartItems: cartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
