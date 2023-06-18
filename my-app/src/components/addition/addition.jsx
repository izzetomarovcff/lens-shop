import React from "react";
import { Link } from "react-router-dom";
import Header from '../header/header.jsx'
import Footer from "../footer/footer.jsx";

import { useDispatch, useSelector } from "react-redux";
function Addition() {
  const {GeneralResponse} = useSelector(state=>state)
  const handlAadditionsOnclick = () => {
    if (GeneralResponse.login === false) {
      alert("Please login")
    } else {

    }
  }
  return (
    <div className="">
      <Header />
      <div className="additions" id="additions">
        <h1 className="heading">Additions</h1>
        <div className="box-container">
          <div className="box">
            <div className="box-head">
              <span className="title">add</span>
              <Link to="/" className='name'>Lens Solution</Link>
            </div>
            <div className="image">
              <img src='images/additions-1.png' alt="" />
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
              <img src='images/additions-2.png' alt="sd" />
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
              <img src='images/additions-3.png' alt="v" />
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
      <Footer />
    </div>
  );
}

export default Addition;
