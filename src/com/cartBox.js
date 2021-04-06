import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";


const CartBox = () => {
  const cartItem = useSelector(state => state.cart);
  console.log(cartItem)
  return (
    <div className="cart-box">
      <div className="cart-items">cartitems</div>
      <Button variant="contained" color="default">
        checkout
      </Button>
    </div>
  );
};

export default CartBox;
