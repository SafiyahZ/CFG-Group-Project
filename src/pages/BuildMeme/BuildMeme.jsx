import React, { useState, useEffect } from 'react';
import './buildMeme.css';


export default function BuildMeme() {

  const CatMemeCreator = () => {
    const [catUrl, setCatUrl] = useState("");
    const [quote, setQuote] = useState("");
  
    useEffect(() => {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setCatUrl(data[0].url));
  
      fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response) => response.json())
        .then((data) => setQuote(data[0]));
    }, []);
  
    const handleNewCat = () => {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setCatUrl(data[0].url));
  
      handleNewQuote(); // call handleNewQuote to change the quote
    };
  
    const handleNewQuote = () => {
      const quoteSources = [
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        "https://api.chucknorris.io/jokes/random",
        "https://type.fit/api/quotes",
      ];
      const randomSource =
        quoteSources[Math.floor(Math.random() * quoteSources.length)];
  
      fetch(randomSource)
        .then((response) => response.json())
        .then((data) => {
          if (randomSource === "https://ron-swanson-quotes.herokuapp.com/v2/quotes") {
            setQuote(data[0]);
          } else if (randomSource === "https://api.chucknorris.io/jokes/random") {
            setQuote(data.value);
          } else if (randomSource === "https://type.fit/api/quotes") {
            const randomIndex = Math.floor(Math.random() * data.length);
            setQuote(data[randomIndex].text);
          }
        });
    };
  
    return (
      <div className="meme-container">
        <div className="cat-container">
        <h3>Cat Meme generator</h3>
          <div
            className="cat-image-container"
            style={{ backgroundImage: `url(${catUrl})` }}
          >
            <p className="quote">{quote}</p>
          </div>
          <button className="new-cat-button" onClick={handleNewCat}>
            New Cat
          </button>
        </div>
        <div className="quote-container">
          <button className="new-quote-button" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  };
  
  const DogMemeCreator = () => {
    const [dogUrl, setDogUrl] = useState("");
    const [quote, setQuote] = useState("");
  
    useEffect(() => {
      fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setDogUrl(data[0].url));
  
      fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response) => response.json())
        .then((data) => setQuote(data[0]));
    }, []);
  
    const handleNewDog = () => {
      fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setDogUrl(data[0].url));
  
      handleNewQuote(); // call handleNewQuote to change the quote
    };
  
    const handleNewQuote = () => {
      const quoteSources = [
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        "https://api.chucknorris.io/jokes/random",
        "https://type.fit/api/quotes",
      ];
      const randomSource =
        quoteSources[Math.floor(Math.random() * quoteSources.length)];
  
      fetch(randomSource)
        .then((response) => response.json())
        .then((data) => {
          if (randomSource === "https://ron-swanson-quotes.herokuapp.com/v2/quotes") {
            setQuote(data[0]);
          } else if (randomSource === "https://api.chucknorris.io/jokes/random") {
            setQuote(data.value);
          } else if (randomSource === "https://type.fit/api/quotes") {
            const randomIndex = Math.floor(Math.random() * data.length);
            setQuote(data[randomIndex].text);
          }
        });
    };
  
    return (
      <div className="meme-container">
        <div className="dog-container">
            <h3>Dog Meme generator</h3>
          <div
            className="dog-image-container"
            style={{ backgroundImage: `url(${dogUrl})` }}
          >
            <p className="quote">{quote}</p>
          </div>
          <button className="new-dog-button" onClick={handleNewDog}>
            New Dog
          </button>
        </div>
        <div className="quote-container">
          <button className="new-quote-button" onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <CatMemeCreator />
      <DogMemeCreator />
    </>
  );
}
