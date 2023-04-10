import React, { useState, useEffect} from 'react';
import './randomPet.css';

export default function RandomPet() {
// Defining a functional component called RandomCat that displays a random cat picture.
  const RandomCat = () => {
      const [imgUrl, setUrl] = useState("https://cdn2.thecatapi.com/images/ebv.jpg");
      const callImg = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(data => setUrl(data[0].url))
      }
// Returning the JSX code that displays the cat image, a button to get a new image, and some text.
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
        .then((res) => res.json())
        .then((data) => setUrl(data[0].url));
    };
  // Using the useEffect hook to call callImg
    useEffect(() => {
      callImg();
    }, []);
  
    return (
      <>
        <div className="random-dog_container">
          <h2 className="random-dog_p">Start your day with a dog pic</h2>
          <div className="random-dog_box">
            <img
              className="random-dog_img"
              src={imgUrl}
              alt="random dog"
              loading="lazy"
            />
            <button className="random-dog_button" onClick={() => callImg()}>
              Click me
            </button>
          </div>
        </div>
      </>
    );
  };
  
  return (
    <>
      <h3 className="random-title">Did you know...</h3>
      <h4 className="statistics">
        Studies show watching images and videos of cute animals for 30 minutes
        lowers blood pressure, heart rate and anxiety
      </h4>
      <div className="generator">
        <RandomCat />
        <RandomDog />
      </div>
    </>
  );
  
}
