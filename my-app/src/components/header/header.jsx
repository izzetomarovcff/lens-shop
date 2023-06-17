import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import myImage from '../../images/logo.png'
function Header() {
  return (
    <div className="header">
        <Link to="/" className="logo"><img src={myImage} alt="image" /></Link>
        <nav class="navbar">
            <Link to="/" className="a active">Home</Link>
            <Link to="/products" className="a">Products</Link>
            <Link to="/addition" className="a">Addition</Link>
            <Link to="/about" className="a">About Us</Link>
            <Link to="/rewiew" className="a">Rewiew</Link>
            <Link to="/contact" className="a">Contact Us</Link>
        </nav>
        <div className="buttons">

            <button id="search-btn">
                <i className="fas fa-search">
                </i>

            </button>
            <button id="cart-btn">
                <i className="fas fa-shopping-cart">
                </i>
            </button>
            <button id="menu-btn">
                <i className="fas fa-bars"></i>
            </button>
        </div>
    </div>
  );
}

export default Header;
