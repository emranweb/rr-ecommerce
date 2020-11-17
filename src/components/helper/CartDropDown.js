import React from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

const CartDropDown = (props) => {
  console.log(props.cartItems);
  return (
    <div className="drop-down-area">
      <div className="card-item">
        {props.cartItems.map((item) => {
          return (
            <div className="dropdown_item" key={Math.random() * 10}>
              <img src={item.imgUrl} alt="img" />
              <div className="dropdown_item-right">
                <h3>{item.name}</h3>
                <span>{item.quantity}</span>
                {"x"}
                <span>{item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Button className="dropdwon_btn" size="large" variant="contained" color="primary">
        Got to Cart
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
