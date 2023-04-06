import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/Logo.png';

const Menu = () => (
    <>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/About">About</Link></p>
    <p><Link to="/Pets">Pets</Link></p>
    <p><Link to="/Contact">Contact</Link></p>

    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        // using Block Element Modifier
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                   ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                   : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) }/>
                }
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                         </div>
                    </div>
                )}
            </div>
           
        </div>
    )
}

export default Navbar;