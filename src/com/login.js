import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { GoogleSignIn, auth } from "../firebase/config";

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <div className="login-area">
      <Button variant="contained" onClick={() => GoogleSignIn()}>
        {user ? "signOut" : "Sign in with Google"}
      </Button>
    </div>
  );
};

export default Login;
