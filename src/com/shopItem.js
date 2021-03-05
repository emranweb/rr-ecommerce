import React from "react";

const ShopItem = (props) => {
  const { name, imageUrl } = props;
  return (
    <div className="shop-item">
      <img src={imageUrl} alt="img" />
      <h5>{name}</h5>
      <button className="btn">Add To Cart</button>
    </div>
  );
};

export default ShopItem;
