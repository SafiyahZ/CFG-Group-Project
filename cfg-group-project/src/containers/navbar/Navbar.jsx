import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.svg';

const Navbar = () => {
    return (
        // using Block Element Modifier
        <div className="global__navbar">
            <div className="global__navbar-links">
                <div className="global__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="global__navbar-links_container">
                <p><a href="#safiyah">Safiyah</a></p>
                    <p><a href="#anca">Anca</a></p>
                    <p><a href="#anju">Anju</a></p>
                    <p><a href="#megha">Megha</a></p>
                    <p><a href="#sade">Sade</a></p>
                    {/* <p><a href="#home">Home</a></p> */}
                </div>
            </div>
            <div className="global__navbar-contact">
                <button type="button">Contact us</button>
            </div>
           
        </div>
    )
}

export default Navbar