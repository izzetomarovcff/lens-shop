import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Header() {
    const [v1, setV1] = useState('a');
    const [v2, setV2] = useState('a');
    const [v3, setV3] = useState('a');
    const [v4, setV4] = useState('a');
    const [v5, setV5] = useState('a');
    const [v6, setV6] = useState('a');
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname==='/'){
            setV1('a active')
        }if(location.pathname==='/products'){
            setV2('a active')
        }if(location.pathname==='/addition'){
            setV3('a active')
        }if(location.pathname==='/about'){
            setV4('a active')
        }if(location.pathname==='/rewiew'){
            setV5('a active')
        }if(location.pathname==='/contact'){
            setV6('a active')
        }
    },location)
  return (
    <div className="header">
        <Link to="/" className="logo"><img src='images/logo.png' alt="image" /></Link>
        <nav class="navbar">
            <Link to="/" className={v1}>Home</Link>
            <Link to="/products" className={v2}>Products</Link>
            <Link to="/addition" className={v3}>Addition</Link>
            <Link to="/about" className={v4}>About Us</Link>
            <Link to="/rewiew" className={v5}>Rewiew</Link>
            <Link to="/contact" className={v6}>Contact Us</Link>
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
