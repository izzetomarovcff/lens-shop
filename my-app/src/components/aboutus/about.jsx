import React from "react";

import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";
import imgabout from '../../images/about.jpg';
import imglearn from '../../images/learn more.png';
import imgreview from '../../images/rewiew.png.png';
import avatar1 from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar-2.png';
import avatar3 from '../../images/avatar-3.png';
function About() {
  return (
    <div className="">
      <Header />
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
      
      <Footer />
    </div>
  );
}

export default About;
