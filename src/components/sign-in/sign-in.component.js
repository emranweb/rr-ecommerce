import React from 'react';
import "./sign-in.style.scss";



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
                        <input type="email" value={this.state.email} onChange={this.handleChange} name="email" required placeholder="type your name" />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChange} value={this.state.password}  required placeholder="type your password" />
                     </div>
                    <input className="submit-btn" type="submit" value="sign in"/>
                </form>
            </div>
        )
    }
}

export default SignIn;