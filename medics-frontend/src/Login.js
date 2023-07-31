import React from "react"
import { useState } from "react";
import validator from 'validator';
import './App.css';
import { useNavigate } from "react-router-dom"
// import Button from 'react-bootstrap/Button';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate()
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!validator.isEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      else{
        navigate("/homescreen")
      }
    }

    //add password check.
    //redirect to homepage for admin on pressing login
    return (
        <div className="Login-form-background">
            <div className="Login-form-container">
                <form className="Login-form">
                    <div className="Login-form-content">
                    <h3 className="Login-form-title">Login In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className={`form-control mt-1 ${emailError ? 'is-invalid' : ''}`}
                            placeholder="Enter email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Log In
                        </button>
                    </div>
                    {/* <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p> */}
                    </div>
                </form>
            </div>
        </div>
    
    );
} 



export default Login;
