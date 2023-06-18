import React from "react";
import img1 from '../../images/lens-1.png';
import img2 from '../../images/lens-2.png';
import img3 from '../../images/lens-3.png';
import img4 from '../../images/lens-4.png';
import img5 from '../../images/lens-5.png';
import img6 from '../../images/lens-6.png';
import img7 from '../../images/lens-7.png';
import img8 from '../../images/lens-8.png';
import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";

function Product() {
  const handleOnclick = () => {
    
  }
  return (
    <div className="">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Product;
