
import './App.css';
import './home.css'


function Home() {
  return (
    <section class="home" id="home">
        <div class="content">
            <h3>LOOKING FOR YOUR LENS? YOU ARE AT THE RIGHT PLACE!</h3>
            <p>
                STILL DONT RECEIVE PRODUCTS FROM TRENDLENS?! START REVIEW NOW. GET THE PRODUCT YOU ARE LOOKING FOR AT
                YOUR DOOR ASAP!
            </p>
        </div>
        <div class="wrapper">
            <div class="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" value={emailValue} onChange={handleChange} required/>
                        <label>Email</label>
                    </div>
                    
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" value={passwordValue} onChange={handleChange} required/>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox" value={checkboxvalue} onChange={handleChange} />
                            Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" class="btn">Login</button>
                    <div class="login-register">
                        <p>Don't have an account?
                            <a href="#" class="register-link">Register</a>
                        </p>
                    </div>
                </form>
            </div>
            <div class="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <input type="text" value={usernameValue} onChange={handleChange} required/>
                        
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                        <input type="email" value={emailValue} onChange={handleChange} required/>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class="fa-solid fa-lock"></i></span>
                        <input type="password" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label><input type="checkbox">
                            I agree to the terms & conditions</label>

                    </div>
                    <button type="submit" class="btn">Register</button>
                    <div class="login-register">
                        <p>Already have an account?
                            <a href="#" class="register-link">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Home;