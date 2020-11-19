import React from "react";
import { connect } from "react-redux";
import { selectCatItems } from "../../redux/cartReselect";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import cartAction from "../../redux/action/cartIconAction";

const CartDropDown = (props) => {
  console.log(props.dispatch);
  return (
    <div className="drop-down-area">
      <div className="card-item">
        {props.cartItems.length ? (
          props.cartItems.map((item) => {
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
          })
        ) : (
          <span className="cart-empty-message">Cart Is Empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          props.history.push("/checkout");
          props.dispatch(cartAction(false));
        }}
        className="dropdwon_btn"
        size="large"
        variant="contained"
        color="primary"
      >
        Got to Checkout
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCatItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
