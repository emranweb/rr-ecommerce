import React from 'react';
import "./sign-in.style.scss";
import Button from "../button/button.component.js";
import InputField from "../input-field/input.component.js";
import {signInWithGoogle} from "../../firebase/firebase-utils.js";


class SignIn extends React.Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      this.setState({email:"", password:""})
    }


    handleChange=(e)=>{
       const {name,value} = e.target;
       this.setState({[name]:value});
       console.log(this.state)
    }


    render(){
        return(
            <div className="sign-in-left">
                <h2>Sign in with Email and Password</h2>
                <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <label>Email</label>
                       <InputField type="email" value={this.state.email}  handleChange={this.handleChange}  name="email" placeholder="User Name"/>
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <InputField type="password" value={this.state.password} name="password"  handleChange={this.handleChange}  placeholder="Password"/>
                     </div>

                     <Button type="submit">Sign In</Button>
                </form>
                <Button type="button" event={signInWithGoogle}>Sign In with Google</Button> 
            </div>
        )
    }
}

export default SignIn;