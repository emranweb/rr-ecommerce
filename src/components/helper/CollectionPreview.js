import React from "react";
import CollectionItem from "./CollectionItem";
import Grid from "@material-ui/core/Grid";

function CollectionPreview(props) {
  return (
    <div className="collection-container">
      <h1 className="collection-title">{props.title}</h1>
      <div className="collection-preview-items">
        <Grid container spacing={2}>
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
      </Grid>
      </div>
    </div>
  );
}

export default CollectionPreview;
