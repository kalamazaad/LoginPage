

import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
     constructor(){
            super();
            this.state={signup:false};
        }
    render() {
        const{signup}=this.state;
        return (
            <div className='login'>
                <div className='leftpanel'>
                    <h1>Welcome Back!</h1>
                    <p>Access and manage your task efficiently</p>
                </div>
                <div className='rightpanel'>
                    <div className='card'>
                        <h2>Login</h2>
                        <input type='text' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <button>Login</button>
                        <p>Don't have an account? <span onClick={()=>this.setState({signup:true})}>Sign Up</span></p>
                    </div>
                </div>
                {signup&&
                    <div className='overlay'>
                        <div className='signup'>
                            <button className='close' onClick={()=>this.setState({signup:false})}>X</button>
                            <h2>Create an account</h2>
                            <label>First Name </label>
                            <input type='text' placeholder='First Name' />
                            <label>Last Name </label>
                            <input type='text' placeholder='Last Name' />
                            <label>Email </label>
                            <input type='text' placeholder='Email' />
                            <label>Phone No </label>
                            <input type='text' placeholder='Phone No' />
                            <label>Password </label>
                            <input type='password' placeholder='Password' />
                            <label>Confirm Password </label>
                            <input type='Confirm password' placeholder='Confirm Password' />
                            <button className='register'>Sign Up</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Login;