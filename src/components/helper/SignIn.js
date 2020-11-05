import React from "react";

import Button from "../utils/Button";
import { signInWithGoogle, signInWithFb } from "../../firebase/firebase-utils";
import TextField from "@material-ui/core/TextField";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-left">
        <h2>Sign in with Email and Password</h2>
        <form onSubmit={this.handleSubmit}>

          <TextField
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            label="Email"
            fullWidth
          />

          <TextField
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
            label="Password"
            fullWidth
          />

          <Button varia type="submit">Sign In</Button>
        </form>
        <Button type="button" event={signInWithGoogle}>
          Sign In with Google
        </Button>
        <Button type="button" event={signInWithFb}>
          Sign In with FB
        </Button>
      </div>
    );
  }
}

export default SignIn;
