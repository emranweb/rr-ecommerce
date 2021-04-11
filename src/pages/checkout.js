import React from "react";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import CheckoutItem from "./checkoutItem";
import {v4 as uuid} from "uuid";
import StripeCheckout from "react-stripe-checkout";

//message when payment clear
const onToken = ()=>{
   alert("payment Successful")
}


const CheckoutButton =(props)=>{
   const price = props.items.map(item=>item.total).reduce((acc,curr)=>acc+curr,0);

   const stripePrice = price * 100;
   
   const publicKey = "pk_test_51If0tOChinzo4fwpezSfzJ6tMtJBWihUZTle9ohjQ3KzBhuDWjgfEg0SRHohpP2I5joeanDloSCCLB7nxFZSc0ts00DqBQXjoV";
   
   return (
     <StripeCheckout
      label="Pay Now"
      name="RR Ecommerce"
      billingAddress
      shippingAddress
      description= {"Your Price is " + price}
      panelLabel="Pay Now"
      token={onToken}
      amount={stripePrice}
      stripeKey= {publicKey}
     />
   )
}



const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="checkout-page">
      <Container maxWidth="lg">
        <div className="checkout-wrapper">
          <div className="checkout-items">
            {cartItems.length > 0
              ? cartItems.map((item) => <CheckoutItem key={uuid()} data={item} id={item.id}/>)
              : "empty cart"}
          </div>
          <div className="total">
            {cartItems.length > 0
              ?"$"+ cartItems
                  .map((item) => item.total)
                  .reduce((acc, curr) => acc + curr)
              : 0}
          </div>
              <CheckoutButton items={cartItems} />
          <div>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPage;
