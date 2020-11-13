import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import cartItemsAction from "../../redux/action/cartItemsAction";

function CollectionItem(props) {
  const { imgUrl, name, price, id } = props;

  return (
    <Grid item xs={3}>
      <div className="preview-item">
        <img className="preview-item-image" src={imgUrl} alt={props.name} />
        <h3 className="preview-item-name">{name}</h3>
        <p className="preview-item-price">{price}</p>
        <Button
          onClick={() => props.setItems({ id, name, price, imgUrl })}
          variant="contained"
          color="primary"
          size="large"
        >
          Add to Cart
        </Button>
      </div>
    </Grid>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setItems: (data) => dispatch(cartItemsAction(data)),
});

export default connect(null,mapDispatchToProps)(CollectionItem);
