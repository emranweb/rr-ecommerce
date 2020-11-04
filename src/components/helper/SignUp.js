import React from "react";
import InputField from "../utils/Input";
import { auth, createUserProfileDoc } from "../../firebase/firebase-utils.js";

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
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password don't Match");
      return;
    }

    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-up-wrapper">
        <h2>I Dont Have any account</h2>
        <h3>Please Sign Up With Email</h3>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <InputField
              type="text"
              value={this.state.displayName}
              handleChange={this.handleChange}
              name="displayName"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <InputField
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <InputField
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <InputField
              type="password"
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
              name="confirmPassword"
              placeholder="confirm your password"
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
