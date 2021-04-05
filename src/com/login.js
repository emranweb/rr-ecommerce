import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { GoogleSignIn, auth } from "../firebase/config";
import { login } from "../redux/user";
import { useSelector, useDispatch } from "react-redux";
import { createUserProfile } from "../firebase/config";

const Login = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        createUserProfile(user);
        dispatch(login("user"));
      }
    });
  }, [user]);

  return (
    <div className="login-area">
      <div> User login : {user}</div>
      <Button variant="contained" onClick={() => GoogleSignIn()}>
        Login with Google
      </Button>
    </div>
  );
};

export default Login;
