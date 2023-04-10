import React, { useState, useEffect } from 'react';
import './randomPet.css';

export default function RandomPet() {

  const RandomCat = () => {
      const [imgUrl, setUrl] = useState("https://cdn2.thecatapi.com/images/DZba-eH_4.jpg");
      const callImg = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setUrl(data[0].url))
      }
      return (
          <>
            <div className="random_container">
            <h2 className='random_p'>Start your day with a cat pic</h2>
              <div className="random_box">
                
                  <img className="random_img" src={imgUrl} alt="random cat" loading="lazy"/>
                  <button className='random_button' onClick={() => callImg()}>Click me</button>
              </div>
            </div>
          </>
      );
  }

  const RandomDog = () => {
      const [imgUrl, setUrl] = useState("https://cdn2.thedogapi.com/images/S1bsCGxrf.jpg");
      const callImg = () => {
        fetch("https://api.thedogapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setUrl(data[0].url))
      }
      return (
          <>
            <div className="random-dog_container">
            <h2 className='random-dog_p'>Start your day with a dog pic</h2>
              <div className="random-dog_box">
                
                  <img className="random-dog_img" src={imgUrl} alt="random dog" loading="lazy"/>
                  <button className='random-dog_button' onClick={() => callImg()}>Click me</button>
              </div>
            </div>
          </>
      );
  }

  return (
    <>
      <RandomCat />
      <RandomDog />
     
    </>
  );
}
