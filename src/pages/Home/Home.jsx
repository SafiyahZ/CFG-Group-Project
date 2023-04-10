import React from "react";
import './home.css';
import pets from '../../assets/pets.png';
import reviews from '../../assets/reviews2.png';


function Home() {
  return (
    <div>
      <h1 className="slogan">UNLEASH THE STRESS WITH</h1>
      <h1 className="slogan">POSITIVE VIBES</h1>
      <img src={pets} alt="pets" className="pet-image" />
      <div className="info4">
        <div className="info">
          <h3 className="title">What Do We Do?</h3>
          <h4 className="description">Welcome to Pawsitive Vibes, your daily dose of happiness! We know life can be stressful, but sometimes all you need is a little break to recharge and feel better. That's where we come in. Our website is filled with adorable animals that are guaranteed to put a smile on your face and help you unwind. From fluffy puppies to curious kittens, we've got it all. So take a deep breath, relax, and let our furry friends bring you some much-needed joy.</h4>
          <a href="/Dogs">
            <button className="viewpets">Explore</button>
          </a>
        </div>
        <img src={reviews} alt="pets" className="review-image" />
      </div>

    </div>
  );
}

export default Home;