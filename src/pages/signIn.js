import React from 'react';
import Login from "../com/login";
import Container from "@material-ui/core/Container";

const SignIn = ()=>{
    return (
        <div className="singin-wrapper">
            <Container maxWidth="lg">
                <Login />
            </Container>
        </div>
    )
}

export default SignIn;