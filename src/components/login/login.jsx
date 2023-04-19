import React from 'react';
import './login-style.css';

const Login = () => {
  return (
    <div className="login-container">
        <div className="login-input">
            <h1>Let's get started!</h1>
            <label><i></i>Username / Email</label>
            <input type="text" placeholder='username/email'/>
            <label><i></i>Password</label>
            <input type="password" placeholder='password'/>
            <button type='submit'>Submit</button>
        </div>
        <div className="login-image">
            <img src="../src/assets/login_img.jpg" alt="" />
        </div>
    </div>
  )
}

export default Login
