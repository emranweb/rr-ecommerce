import React from "react";
import { connect } from "react-redux";

const CartIcon = (props) => {
  return (
    <div className="cart-icon">
      {props.cartItems.reduce((aa, item) => aa + item.quantity, 0)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(CartIcon);
