import React from "react";
import './home.css';
import Header from "../../components/header/header";
import Login from "../../components/login/login.jsx";
import Register from "../../components/register/register";
import { useState } from "react";
import img1 from '../../images/lens-1.png';
import img2 from '../../images/lens-2.png';
import img3 from '../../images/lens-3.png';
import img4 from '../../images/lens-4.png';
import img5 from '../../images/lens-5.png';
import img6 from '../../images/lens-6.png';
import img7 from '../../images/lens-7.png';
import img8 from '../../images/lens-8.png';

function Home() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(true);
  const enableregister = () => {
    setRegister(false)
  }
  const enablelogin = () => {
    setRegister(true)
  }
  const logined = ()=>{
    setLogin(true)
  }
  const handleOnclick = () =>{
    if(login===false){
      alert("Please login")
    }else{

    }
  }
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
          {login ? (<div></div>) : (register ? (<Login activeregister={enableregister} activelogin={logined} />) : (<Register activelogin={enablelogin} activelogin2={logined}/>))}
        </div>
      </div>
      <div className="products" id="products">
        <h1 className="heading">Products</h1>
        <div className="box-container">

          <div className="box">
            <div className="box-head">
              <img src={img1} alt="lens" />
              <span className="product-category">Contact Lens</span>
              <h3>Blue Color Lens</h3>
              <div className="price">₺110 <span>₺150</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img2} alt="lens" />
              <span class="product-category">Contact Lens</span>
              <h3>Red Color Lens</h3>
              <div class="price">₺110 <span>₺150</span>
              </div>
              <div class="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img3} alt="lens" />
              <span class="product-category">Contact Lens</span>
              <h3>Green Color Lens</h3>
              <div class="price">₺110 <span>₺150</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img4} alt="lens" />
              <span class="product-category">Contact Lens</span>
              <h3>Grey Color Lens</h3>
              <div class="price">₺110 <span>₺150</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img5} alt="lens" />
              <span class="product-category">size:-4.25</span>
              <h3>Number Lens</h3>
              <div class="price">₺120 <span>₺160</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img6} alt="lens" />
              <span class="product-category">size:3.00</span>
              <h3>Number Lens</h3>
              <div class="price">₺120 <span>₺160</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img7} alt="lens" />
              <span class="product-category">size:-1.25</span>
              <h3>Number Lens</h3>
              <div class="price">₺120 <span>₺160</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <img src={img8} alt="lens" />
              <span class="product-category">size:2.25</span>
              <h3>Number Lens</h3>
              <div class="price">₺120 <span>₺160</span>
              </div>
              <div class="box-bottom">
              <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
