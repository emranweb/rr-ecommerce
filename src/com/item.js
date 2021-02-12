import React from "react";

const Item = ({ title }) => {
  return (
    <div className="item">
      <h1 className="item-title">{title}</h1>
      <h4>Shop Now</h4>
    </div>
  );
};

export default Item;
