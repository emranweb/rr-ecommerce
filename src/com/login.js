import React from 'react';
import Button from "@material-ui/core/Button";
import GoogleSignIn from "../firebase/config";

const Login =()=>{
    return (
        <div className="login-area">
            <Button variant="contained" onClick={()=>GoogleSignIn()}>Login With Google</Button>
        </div>
    )
}


export default Login;