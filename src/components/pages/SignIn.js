import React from 'react';
import SignIn from "../helper/SignIn";
import SignUp from '../helper/SignUp';

function SignInPage(){
    return(
        <div className="sing-in-wrapper">
           <SignIn />
           <SignUp />
        </div>
    )
}


export default SignInPage;