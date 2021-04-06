import React from "react";
import cartImg from "../asset/cart.svg";
import CartBox from "./cartBox";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../redux/cartshow";

const CartIcon = () => {
  const showState = useSelector((state) => state.show.value);
  const disptch = useDispatch();
  return (
    <div className="cart-wrapper">
      <img src={cartImg} onClick={() => disptch(show(true))} alt="cart icon" />
      {showState ? <CartBox /> : ""}
    </div>
  );
};

export default CartIcon;
