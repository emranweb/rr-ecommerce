import React from "react";
import { selectCatItems, cartPriceCount } from "../../redux/cartReselect";
import { connect } from "react-redux";


function Checkout(props) {
  return (
    <div className="checkout">
      <h1>Checkout </h1>
      <div className="checkout_area">
        <div className="checkout_header">
          <span className="product_image">Image</span>
          <span className="product_name">Name</span>
          <span className="product_price">Price</span>
          <span className="product_quantity">Quantity</span>
          <span className="product_remove">Remove</span>
        </div>
        <div className="checkout_body">
          {props.cartItems.map((item) => {
            return (
              <div className="cart_items" key={Math.random() * 10}>
                <img src={item.imgUrl} alt="img" />
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <span>{item.quantity}</span>
                  <span>X</span>
              </div>
            );
          })}
        </div>
        <div className="checkout_footer">
            <h1>Total: </h1>
        <h3 className="total_count">{props.totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  cartItems: selectCatItems(state),
  totalPrice : cartPriceCount(state),
});



export default connect(mapStateToProps)(Checkout);
