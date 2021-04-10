import React from "react";
import ShopItem from "./shopItem";
<<<<<<< HEAD

=======
>>>>>>> 1fbe3832f852d7a7e6d3495163efb38b8f2db6b9

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
 