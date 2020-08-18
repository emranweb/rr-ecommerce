import React from 'react'
import {Link} from "react-router-dom";
import "./header.style.scss";


function Header(){
  return(
   <div className="header">
       <div className="logo">
           <Link to="/">Logo</Link>
       </div>
       <div className="menu">
           <Link to="/shop">
               Shop
           </Link>
           <Link to="/shop">
               Other
           </Link>
       </div>
   </div>
  )
}


export default Header;