import React from "react";
import './login.css'
import { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', email);
        console.log('Password:', password);
        setEmail('');
        setPassword('');
    };
    return (
        <div className="wrapper">
            <div className="form-box login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />Remember me</label>
                        <Link to="/" >Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <div class="login-register">
                        <p>Don't have an account?
                            <Link to="/" className="register-link"> Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;