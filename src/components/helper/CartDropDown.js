import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

const CartDropDown = (props) => {
  
  return (
    <div className="drop-down-area">
      <div className="card-item">
        {props.cartItems.map((item) => {
          return (
            <div className="dropdown_item" key={Math.random()*10}>
              <img src={item.imgUrl} alt="img" />
              <span>{item.price}</span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <Button variant="contained" color="primary">
        Got to Cart
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
