import React from "react";
import Login from "../com/login";
import SignUp from "../com/signup";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const SignIn = () => {
  return (
    <div className="singin-wrapper">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={6} >
            <Login />
          </Grid>
          <Grid item lg={6}>
            <SignUp />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignIn;
