import React from "react";
import './home.css';
import Header from "../../components/header/header";
import Login from "../../components/login/login.jsx";
import Register from "../../components/register/register";
import { useState } from "react";
function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  return (
    <div>
      <div className="home">
        <Header />
        <div className="loginsection">
          <div className="content">
            <h3>LOOKING FOR YOUR LENS? YOU ARE AT THE RIGHT PLACE!</h3>
            <p>
              STILL DONT RECEIVE PRODUCTS FROM TRENDLENS?! START REVIEW NOW. GET THE PRODUCT YOU ARE LOOKING FOR AT
              YOUR DOOR ASAP!
            </p>
          </div>
          {login?(<div></div>):(register?(<Login/>):(<Register/>))}
          
          
        </div>
        
      </div>
    </div>
  );
}

export default Home;
