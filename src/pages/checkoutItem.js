import React from "react";
import { useDispatch } from "react-redux";
import { increase, decrease, removeToCart } from "../redux/cart";

const CheckoutItem = (props) => {
  const { price, quantity, imageUrl } = props.data;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <img src={imageUrl} />
      <span>{price}</span>
      <div>
        <span onClick={() => dispatch(decrease(props.id))}>-</span>
        <span>{quantity}</span>
        <span onClick={() => dispatch(increase(props.id))}>+</span>
      </div>
      <span onClick={() => dispatch(removeToCart(props.data))}>x</span>
    </div>
  );
};

export default CheckoutItem;
