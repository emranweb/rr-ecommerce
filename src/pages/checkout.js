import React from "react";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import CheckoutItem from "./checkoutItem";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="checkout-page">
      <Container maxWidth="lg">
        <div className="checkout-wrapper">
          <div className="checkout-items">
            {cartItems.length > 0
              ? cartItems.map((item) => <CheckoutItem key={item.id} data={item} />)
              : "empty cart"}
          </div>
          <div className="total">
            {cartItems.length > 0
              ? cartItems
                  .map((item) => item.total)
                  .reduce((acc, curr) => acc + curr)
              : 0}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
