import React from "react";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import {removeToCart} from "../redux/cart";
import{Link} from "react-router-dom";
import { show } from "../redux/cartshow";

const CartBox = () => {
  const cartItem = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const number = cartItem.length;

  return (
    <div className="cart-box">
      <div className="cart-items">{
        cartItem.map(item=>{
           return (
            <div className="cart-item" key={item.id+1}>
               <img src={item.imageUrl}  alt="cart box"/>
               <span>{item.price}</span>
               <span>{item.quantity}</span>
               <span onClick={()=>dispatch(removeToCart(item))}>x</span>
         </div>
           )
        })
      }</div>
      <Button variant="contained" color="default">
        <Link to="/checkout" onClick={()=>dispatch(show(false))}>checkout</Link>
      </Button>
    </div>
  );
};

export default CartBox;
