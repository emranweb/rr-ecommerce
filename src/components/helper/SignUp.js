import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "../utils/Button";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
   
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-up-wrapper">
        <h2>Don't Have any account</h2>
        <h5>Please Sign Up With Email</h5>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            value={this.state.displayName}
            onChange={this.handleChange}
            name="displayName"
            label="Name"
            fullWidth
          />

          <TextField
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            name="email"
            label="Email"
            fullWidth
          />

          <TextField
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            name="password"
            label="Password"
            fullWidth
          />

          <TextField
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            name="confirmPassword"
            label="Password"
            fullWidth
          />

         <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
