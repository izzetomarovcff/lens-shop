import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RemoveCart } from '../../redux/action'
import { RemoveAddtionCart } from '../../redux/action'
import { ActiveCart } from '../../redux/action'
function Header() {
    const dispatch = useDispatch()
    const { GeneralResponse } = useSelector(state => state)
    const [v1, setV1] = useState('a');
    const [v2, setV2] = useState('a');
    const [v3, setV3] = useState('a');
    const [v4, setV4] = useState('a');
    const [v5, setV5] = useState('a');
    const [v6, setV6] = useState('a');
    const [search, setSearch] = useState('search-form');
    const [cart, setCart] = useState('deactivecart');
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
    const activesearch= ()=>{
        if(search==="search-form"){
            setSearch('active')
        }else{
            setSearch('search-form')
        }
    }
    const activecart= ()=>{
        if(cart==="deactivecart"){
            setCart('activecart')
        }else{
            setCart('deactivecart')
        }
    }
    const removeLensItem=(proitem)=>{
        const updatedItems = GeneralResponse.cart.filter((cartitem)=>cartitem.id !== proitem.id)
        dispatch(RemoveCart(updatedItems))
        
    }
    const removeAdditionItem=(addition)=>{
        const updatedAdditionItems = GeneralResponse.additioncart.filter((additioncartitem)=>additioncartitem.id !== addition.id)
        dispatch(RemoveAddtionCart(updatedAdditionItems))  
            
    }

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

            <button id="search-btn" onClick={activesearch}>
                <i className="fas fa-search">
                </i>

            </button>
            <button id="cart-btn" onClick={activecart}>
                <i className="fas fa-shopping-cart">
                </i>
            </button>
            
            <button id="menu-btn">
                <i className="fas fa-bars"></i>
            </button>
            
        </div>
        <div class={search}>
            <input type="text" class="search-input" id="search-box" placeholder="search here" />
            <i class="fas fa-search"></i>
        </div>
        {GeneralResponse.activecart ? (
            <div className={cart}>
            {GeneralResponse.cart.map(proitem=>(
                <div className="itemss">
                    <div className="cartimg">
                        <img src={proitem.img} alt="dsg" />
                    </div>
                    <h1>{proitem.name}</h1>
                    <h1>₺{proitem.price}</h1>
                    <i class="fa-solid fa-xmark delete" onClick={()=>removeLensItem(proitem)}></i>
                </div>
            ))}
            {GeneralResponse.additioncart.map(additem=>(
                
                <div className="itemss">
                    <div className="cartimg">
                        <img src={additem.img} alt="dsg" />
                    </div>
                    <h1>{additem.name}</h1>
                    <h1>₺{additem.price}</h1>
                    <i class="fa-solid fa-xmark delete" onClick={()=>removeAdditionItem(additem)}></i>
                </div>
            ))}
        </div>
        ):(<div></div>)}
        
    </div>
  );
}

export default Header;
