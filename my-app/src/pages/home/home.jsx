import React from "react";
import './home.css';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Login from "../../components/login/login.jsx";
import Register from "../../components/register/register";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetLogin } from "../../redux/action";
import img1 from '../../images/lens-1.png';
import img2 from '../../images/lens-2.png';
import img3 from '../../images/lens-3.png';
import img4 from '../../images/lens-4.png';
import img5 from '../../images/lens-5.png';
import img6 from '../../images/lens-6.png';
import img7 from '../../images/lens-7.png';
import img8 from '../../images/lens-8.png';
import imga1 from '../../images/additions-1.png';
import imga2 from '../../images/additions-2.png';
import imga3 from '../../images/additions-3.png';
import imgabout from '../../images/about.jpg';
import imglearn from '../../images/learn more.png';
import imgreview from '../../images/rewiew.png.png';
import avatar1 from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar-2.png';
import avatar3 from '../../images/avatar-3.png';

import { Link } from "react-router-dom";
function Home() {
  const dispatch = useDispatch()
  const {GeneralResponse} = useSelector(state=>state)
  const handleOnclick = () => {
    if (GeneralResponse.login === false) {
      alert("Please login")
    } else {

    }
  }
  const handlAadditionsOnclick = () => {
    if (GeneralResponse.login === false) {
      alert("Please login")
    } else {

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
            <h3>{GeneralResponse.login}</h3>
          </div>
          {GeneralResponse.login ? (<div></div>) : (GeneralResponse.register ? (<Login />) : (<Register />))}
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
          <div className="box">
            <div className="box-head">
              <img src={img2} alt="lens" />
              <span className="product-category">Contact Lens</span>
              <h3>Red Color Lens</h3>
              <div className="price">₺110 <span>₺150</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img3} alt="lens" />
              <span className="product-category">Contact Lens</span>
              <h3>Green Color Lens</h3>
              <div className="price">₺110 <span>₺150</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img4} alt="lens" />
              <span className="product-category">Contact Lens</span>
              <h3>Grey Color Lens</h3>
              <div className="price">₺110 <span>₺150</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img5} alt="lens" />
              <span className="product-category">size:-4.25</span>
              <h3>Number Lens</h3>
              <div className="price">₺120 <span>₺160</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img6} alt="lens" />
              <span className="product-category">size:3.00</span>
              <h3>Number Lens</h3>
              <div className="price">₺120 <span>₺160</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img7} alt="lens" />
              <span className="product-category">size:-1.25</span>
              <h3>Number Lens</h3>
              <div className="price">₺120 <span>₺160</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <img src={img8} alt="lens" />
              <span className="product-category">size:2.25</span>
              <h3>Number Lens</h3>
              <div className="price">₺120 <span>₺160</span>
              </div>
              <div className="box-bottom">
                <div className="btn" onClick={handleOnclick}>add to cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additions" id="additions">
        <h1 className="heading">Additions</h1>
        <div className="box-container">
          <div className="box">
            <div className="box-head">
              <span className="title">add</span>
              <Link to="/" className='name'>Lens Solution</Link>
            </div>
            <div className="image">
              <img src={imga1} alt="" />
            </div>
            <div className="box-bottom">
              <div className="info">
                <b className="price">₺80</b>
                <span className="amount">450ml</span>
              </div>
              <div className="additions-btn">
                <div className="a" onClick={handlAadditionsOnclick}>
                  <i className="fas fa-plus"></i>
                </div>

              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <span className="title">add</span>
              <Link to="/" className='name'>Lens Box Black</Link>
            </div>
            <div className="image">
              <img src={imga2} alt="" />
            </div>
            <div className="box-bottom">
              <div className="info">
                <b className="price">₺55</b>
                <span className="amount">mate box</span>
              </div>
              <div className="additions-btn">
                <div className="a" onClick={handlAadditionsOnclick}>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-head">
              <span className="title">add</span>
              <Link to="/" className='name'>Lens Box Blue</Link>
            </div>
            <div className="image">
              <img src={imga3} alt="" />
            </div>
            <div className="box-bottom">
              <div className="info">
                <b className="price">₺55</b>
                <span className="amount">mate box</span>
              </div>
              <div className="additions-btn">
                <div className="a" onClick={handlAadditionsOnclick}>
                  <i className="fas fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <h1 className="heading">About Us </h1>
        <div className="row">
          <div className="image">
            <img src={imgabout} alt="about" />
          </div>
          <div className="content">
            <h3>Why Us?</h3>
            <p>We come across this question often! Because we are honored to offer the customer our best quality,
              most affordable, coolest and most useful lenses. Customer satisfaction is our pride! That's why we
              do our job with confidence and care. Also we provide payment at the door.</p>
            <a href={imglearn} className="btn">learn more</a>
          </div>
        </div>
      </div>
      <div className="rewiew" id="rewiew">
        <h1 className="heading">customer's rewiew</h1>
        <div className="box-container">
          <div className="box">
            <img src={imgreview} alt="rewiew-1" />
            <p>The lenses I bought are not lasting like they used to. They tear easy. I’ve noticed my eye getting
              uncomfortable and then go to clean this never happened before. I went to check online to see if they
              changed something and it looks as though other people are noticing a difference as well. I’m not
              sure what it is, but it’s very disappointing.
            </p>
            <img src={avatar1} alt="avatar-1.png" className="user" />
            <h3>jennifer lowrence</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </div>
          <div className="box">
            <img src={imgreview} alt="rewiew-1" />
            <p>I have used these lenses for years, but my last batch, are torn at the edge and the quality is really
              bad, any suggestions on a different brand. What a company will do for money over quality, let’s not
              stay with a company that doesn’t care about their customers. My eyes are very important to me, but I
              guess not to them.
            </p>
            <img src={avatar2} alt="avatar-2.png" className="user" />
            <h3>tom holland</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="box">
            <img src={imgreview} alt="rewiew-1" />
            <p>These are my first contact lenses that I have gotten and they are very comfortable. You can't feel
              them in your eyes at all; you forget that you're wearing contacts! They also keep moisturized all
              day. I highly recommend these lenses, they are the best out there.These acuvue oasys contacts feel
              amazing. I could hardly even tell I'm wearing contacts! Yayy :)</p>
            <img src={avatar3} alt="avatar-3.png" className="user" />
            <h3>adriana cooper</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="contact" id="contact us">
        <h1 className="heading">contact us</h1>
        <div class="row">
          <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24080.29794842491!2d28.958047359744217!3d41.024441125127645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!3m2!1d41.0082376!2d28.9783589!4m5!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bCwgVMO8cmtpeWU!3m2!1d41.0370023!2d28.985091699999998!5e0!3m2!1str!2saz!4v1684459600436!5m2!1str!2saz"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form>
            <h3>contact information</h3>
            <div class="content">
              <p>Our Number:</p>
              <span class="icon"><i class="fa-solid fa-phone"></i></span>
              <p1>+90 525 555 ** **</p1>
              <a href="https://outlook.live.com/owa/" class="btn">contact with our mail</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
