import React from "react";
import "./about.css";
import Anca from "../../assets/Anca.png";
import anju from "../../assets/anju.png";
import Megs from "../../assets/Megs.png";
import Sade from "../../assets/Sade.png";
import Safiyah from "../../assets/Safiyah.png";

function About() {
  return (
    <div>
      <div className="about">
        <h2 className="title3">SAAMS</h2>
        <p className="about_p">
          We're thrilled that you're here to join us in celebrating our love for
          cats and dogs. Our goal is to provide a fun and engaging platform
          where you can come and see photos of different types of pets, ranging
          from cute to funny.
        </p>

        <p className="about_p">
          We believe that there are many benefits to visually seeing cats and
          dogs photos. It can help promote relaxation and reduce stress levels,
          boost mood, foster creativity, and provide entertainment. We hope that
          our photo gallery can be a source of positivity and joy for our
          visitors.
        </p>
        <p className="about_p">
          Thank you for visiting our pet photo gallery, and we hope that you
          enjoy browsing through our collection of adorable pet photos.
        </p>

        <h3 className="teaminfo"> MEET THE TEAM</h3>

        <p className="about_p">
          Our team, SAAMS is made up of devoted pet owners and animal lovers who
          are dedicated to promoting responsible pet ownership, doses of
          serotonin, providing resources and support to pet owners. We hope
          these photos not only give you a boost of serotonin but persuades you
          to look into adopting rather than purchasing from puppy mills. We
          believe that every pet deserves a loving fur-ever home!
        </p>
      </div>

      <div className="Container-for-team-photo">
        <img src={Anca} alt="photo of Anca" className="team-photo" />
        <img src={anju} alt="photo of anju" className="team-photo" />
        <img src={Megs} alt="photo of Megs" className="team-photo" />
        <img src={Sade} alt="photo of Sade" className="team-photo" />
        <img src={Safiyah} alt="photo of Safiyah" className="team-photo" />
      </div>
    </div>
  );
}

export default About;
