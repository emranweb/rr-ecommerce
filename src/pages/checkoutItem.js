import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../redux/cart";

const CheckoutItem = (props) => {
    const {id, price, quantity, imageUrl} = props.data;
    const dispatch = useDispatch();
      
  return (
    <div className="checkout-item">
      <img src={imageUrl} />
      <span>{price}</span>
      <div>
        <span> -</span>
        <span>{quantity}</span>
        <span>+</span>
      </div>
      <span>x</span>
    </div>
  );
};

export default CheckoutItem;
