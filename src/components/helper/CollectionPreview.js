import React from "react";
import CollectionItem from "./CollectionItem";

function CollectionPreview(props) {
  return (
    <div className="collection-container">
      <h1 className="collection-title">{props.title}</h1>
      <div className="collection-preview-items">
        {props.items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem
              key={Math.random().toString(36).substr(2, 9)}
              name={item.name}
              imgUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
