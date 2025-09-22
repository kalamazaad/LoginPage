import React, { Component } from 'react';
import './Login.css';
import { BASEURL, callApi } from './lib';
class Login extends Component {
     constructor(){
            super();
            this.state={signup:false, signupData:{
                firstName:'',
                lastName:'',
                emailId:'', 
                phone:'',
                password:'',
                confirmPassword:''
            }, errData:""};
            this.signupResponse=this.signupResponse.bind(this);
            // this.registerUser=this.registerUser.bind(this);
        }

        handleSignupInput(e){
            this.setState({signupData:{...this.state.signupData, [e.target.name]:e.target.value}});
        }

        validateSignup(){
            const{signupData}=this.state;
            const err={};
            if(!signupData.firstName.trim()) err.firstName="First Name is required";
            if(!signupData.lastName.trim()) err.lastName="Last Name is required";
            if(!signupData.emailId.trim()) err.emailId="Email is required";
            if(!signupData.phone.trim()) err.phone="Phone No is required";
            if(!signupData.password.trim()) err.password="Password is required";
            if(signupData.confirmPassword.length < 8) err.confirmPassword="Confirm Password is required";
            if(signupData.password!==signupData.confirmPassword) err.confirmPassword="Password and Confirm Password should be same";
            this.setState({errData:err});
            return Object.keys(err).length===0;
        }

        registerUser(){
            if(!this.validateSignup())
                return;

            let data=JSON.stringify({
                firstName:this.state.signupData.firstName,
                lastName:this.state.signupData.lastName,
                emailId:this.state.signupData.emailId,
                phone:this.state.signupData.phone,
                password:this.state.signupData.password 
            });

            callApi("POST", BASEURL+"signup", data, this.signupResponse)

            // alert(data);
            // alert("Registered Successfully");
        }

//... spread operator
        signupResponse(res){
            let rdata=JSON.parse(res);
            alert(rdata);

            this.setState({signupData:{
                firstName:'',
                lastName:'',
                emailId:'', 
                phone:'',
                password:'',
                confirmPassword:''
            },signup:null});
            //alert(res);
        }

    render() {
        const{signup, signupData, errData}=this.state;
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
                            <input type='text' placeholder='First Name' name='firstName' value={signupData.firstName} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.firstName ? {} : {"border" : "1px solid red"})}/>
                            <label>Last Name </label>
                            <input type='text' placeholder='Last Name' name='lastName' value={signupData.lastName} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.lastName ? {} : {"border" : "1px solid red"})}/>
                            <label>Email </label>
                            <input type='email' placeholder='Email' name='emailId' value={signupData.emailId} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.emailId ? {} : {"border" : "1px solid red"})}/>
                            <label>Phone No </label>
                            <input type='text' placeholder='Phone No' name='phone' value={signupData.phone} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.phone ? {} : {"border" : "1px solid red"})}/>
                            <label>Password </label>
                            <input type='password' placeholder='Password' name='password' value={signupData.password} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.password ? {} : {"border" : "1px solid red"})}/>
                            <label>Confirm Password </label>
                            <input type='password' placeholder='Confirm Password' name='confirmPassword' value={signupData.confirmPassword} onChange={(e)=>this.handleSignupInput(e)} autoComplete='off' style={(!errData.confirmPassword ? {} : {"border" : "1px solid red"})}/>
                            <button className='register' onClick={()=>this.registerUser()}>Sign Up</button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Login;