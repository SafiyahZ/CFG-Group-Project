import React from 'react';
import './hero.css';
import her from '../../assets/her.png';

const Hero = () => {
    return (
     
        <div className="hero section__padding" id="home">
            <div className="hero-content">
                <h1 className="hero__text">
                    Main heading for my page. I need to come up with something more creative
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
                </div>
                <div className="hero-image">
                   <img src={her} alt="her"/>
                </div>
        </div>
    )  
}

export default Hero
