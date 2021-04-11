import React from "react";
import cartImg from "../asset/cart.svg";
import CartBox from "./cartBox";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../redux/cartshow";

const CartIcon = () => {
  const showState = useSelector((state) => state.show.value);
  const cartItems = useSelector((state) => state.cart);

  const disptch = useDispatch();
  return (
    <div className="cart-wrapper">
      <img src={cartImg} onClick={() => disptch(show(true))} alt="cart icon" />
      <span className="item-number">{cartItems ? cartItems.length : 0}</span>
      {showState ? <CartBox /> : ""}
    </div>
  );
};

export default CartIcon;
