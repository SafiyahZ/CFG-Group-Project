import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo2.svg';

const Menu = () => (
    <>
    <p><a href="#safiyah">Safiyah</a></p>
    <p><a href="#anca">Anca</a></p>
    <p><a href="#anju">Anju</a></p>
    <p><a href="#megha">Megha</a></p>
    <p><a href="#sade">Sade</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        // using Block Element Modifier
        <div className="global__navbar">
            <div className="global__navbar-links">
                <div className="global__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="global__navbar-links_container">
                    <Menu />
                    {/* <p><a href="#home">Home</a></p> */}
                </div>
            </div>
            <div className="global__navbar-contact">
                <button type="button">Contact us</button>
            </div>
            <div className="global__navbar-menu">
                {toggleMenu
                   ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                   : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) }/>
                }
                {toggleMenu && (
                    <div className="global__navbar-menu_container scale-up-center">
                        <div className="global__navbar-menu_container-links">
                            <Menu />
                         <div className="global__navbar-menu_container-links-contact">
                            <button type="button">Contact us</button>
                         </div>
                         </div>
                    </div>
                )}
            </div>
           
        </div>
    )
}

export default Navbar;