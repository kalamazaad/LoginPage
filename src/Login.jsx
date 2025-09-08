

import React, { Component } from 'react';
import './Login.css';
class Login extends Component {
    render() {
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
                        <p>Don't have an account? <span>Sign Up</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;