import React from "react";

import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";
import imgreview from '../../images/rewiew.png.png';
import avatar1 from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar-2.png';
import avatar3 from '../../images/avatar-3.png';
function Rewiew() {
  return (
    <div className="">
      <Header />
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
      <Footer />
    </div>
  );
}

export default Rewiew;
