import React from "react";
import Button from "@material-ui/core/Button";

const cartBox = () => {
  return (
    <div className="cart-box">
      <div className="cart-items">cartitems</div>
      <Button variant="contained" color="default">
        checkout
      </Button>
    </div>
  );
};

export default cartBox;
