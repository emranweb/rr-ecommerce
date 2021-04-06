import React from 'react';
import Container from "@material-ui/core/Container";
import { useSelector } from 'react-redux';


const CheckoutPage= ()=>{
   const cartItems= useSelector(state=>state.cart);
   
    return (
      <div className="checkout-page">
       <Container maxWidth="lg">
            <div className="checkout-wrapper">
                <div className="checkout-items">
                    {cartItems.map(item=>{
                        return (
                            <div className="checkout-item" key={item.id+2}>
                                <img src={item.imageUrl} />
                                 <span>{item.price}</span>
                                 <div>
                                     <span> -</span>
                                     <span>{item.quantity}</span>
                                     <span>+</span>
                                 </div>
                                 <span>x</span> 
                            </div>
                        )
                    })}
                </div>
                <div className="total">{0}</div>
            </div>
       </Container>
      </div>
   )
}

export default CheckoutPage;