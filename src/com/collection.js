import React from "react";
import ShopItem from "./shopItem";

const Collection = (props) => {


  const { title, items } = props;
  return (
    <div className="preview-item">
      <h2>{title}</h2>
      <div className="preview_items">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <ShopItem key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Collection;
 