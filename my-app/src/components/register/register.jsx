import React from "react";
import './register.css'
import '../login/login.css'
import { useState } from "react";
import { Link } from "react-router-dom";


function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    const changetype2 = () => {
        props.activelogin()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        setUsername('');
        setEmail('');
        setPassword('');
        
    };
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const changelogin = () =>{
        props.activelogin2()
    }
    return (
        <div className="wrapper">
            <div class="form-box">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/> I agree to the terms & conditions</label>
                    </div>
                    <button type="submit" className="btn" onClick={changelogin}>Register</button>
                    <div class="login-register">
                        <p>Already have an account?
                            <Link to="/" className="register-link" onClick={changetype2}  > Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default Register