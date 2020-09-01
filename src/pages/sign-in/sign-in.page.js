import React from 'react';
import SignIn from "../../components/sign-in/sign-in.component.js";
import SignUp from '../../components/sign-up/sign-up.component.js';
import "./sign-in.style.scss";

function SignInPage(){
    return(
        <div className="sing-in-wrapper">
           <SignIn />
           <SignUp />
        </div>
    )
}


export default SignInPage;