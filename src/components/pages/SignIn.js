import React from "react";
import SignIn from "../helper/SignIn";
import SignUp from "../helper/SignUp";
import Grid from "@material-ui/core/Grid";

function SignInPage(props) {
  return (
    <div className="sing-in-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SignIn  user={props.currentUser}/>
        </Grid>
        <Grid item xs={6}>
          <SignUp />
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInPage;
