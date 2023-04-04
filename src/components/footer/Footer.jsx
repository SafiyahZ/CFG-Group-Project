import React from 'react';
import './footer.css';
import fb from '../../assets/fb.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer section-padding">
        <div className="footer-links">
            <div className="footer-links-div">
              <div className="socialmedia">
                <p><img src={fb} alt=""/></p>
                <p><img src={twitter} alt=""/></p>
                <p><img src={linkedin} alt=""/></p>
                <p><img src={instagram} alt=""/></p>
              </div>
            </div> 
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>
              @{new Date().getFullYear()} SAAMS. All rights reserved.
            </p>
          </div>
          <div className="footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;