import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignUp = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    const phoneValid = phone.match(/(\+88)?-?01[1-9]\d{8}/g);
    if (phoneValid) {
      console.log(phoneValid);
    } else {
      console.log("invalid");
    }
  };

  const [phone, setPhone] = useState("");

  const inputChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <form onSubmit={formSubmit}>
        <TextField
          id="standard-basic"
          label="Phone"
          value={phone}
          name="phone"
          type="number"
          onChange={inputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
