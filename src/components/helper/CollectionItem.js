import React from "react";
import Grid from "@material-ui/core/Grid";

function CollectionItem(props) {
  return (
      <Grid item xs={3}>
        <div className="preview-item">
          <img className="preview-item-image" src={props.imgUrl} alt={props.name}/>
          <h3 className="preview-item-name">{props.name}</h3>
          <p className="preview-item-price">{props.price}</p>
        </div>
      </Grid>
  );
}

export default CollectionItem;
