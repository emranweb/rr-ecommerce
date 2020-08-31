import React from 'react'
import {Link} from "react-router-dom";
import "./header.style.scss";
import {auth} from "../../firebase/firebase-utils.js";

function Header(props){
  return(
   <div className="header">
       <div className="logo">
           <Link to="/">Logo</Link>
       </div>
       <div className="menu">
           <Link to="/shop">
               Shop
           </Link>
           {
               props.currentUser ? <div onClick={()=>auth.signOut()}>Sign Out</div> : <Link to="/sign-in">Sign In</Link>
           }
       </div>
   </div>
  )
}


export default Header;