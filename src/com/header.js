import React from 'react';
import Container from "@material-ui/core/Container";
import {Link} from "react-router-dom";


const Header = ()=>{
   return (
       <header>
           <Container maxWidth="lg">
               <div className="logo">
                 <Link to="/">RR Ecommerce</Link>
               </div>
               <div className="menu">
                   <li><Link to ="/shop">Shop</Link></li>
                   <li><Link to ="/login">login</Link></li>
               </div>
           </Container>
       </header>
   )
}


export default Header;