import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";
import Button from "@material-ui/core/Button";

const ShopItem = (props) => {
  const { name, imageUrl } = props;
  const dispatch = useDispatch();
  
  return (
    <div className="shop-item">
      <img src={imageUrl} alt="img" />
      <h5>{name}</h5>
      <Button variant="contained" color="default"  onClick={()=>dispatch(addToCart(props))}>Add To Cart</Button>
    </div>
  );
};

export default ShopItem;
