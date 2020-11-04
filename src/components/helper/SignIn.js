import React from 'react';

import Button from "../utils/Button";
import InputField from "../utils/Input";
import {signInWithGoogle, signInWithFb} from "../../firebase/firebase-utils";


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
                <Button type="button" event={signInWithFb}>Sign In with FB</Button> 
            </div>
        )
    }
}

export default SignIn;