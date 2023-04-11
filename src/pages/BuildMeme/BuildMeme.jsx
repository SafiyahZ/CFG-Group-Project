import React, { useState, useEffect } from 'react';
import './buildMeme.css';


export default function BuildMeme() {

// useState() is used to set the initial state for catUrl and quote. 
  const CatMemeCreator = () => {
    const [catUrl, setCatUrl] = useState("");
    const [quote, setQuote] = useState("");

// useEffect() is used to fetch data from APIs 
    useEffect(() => {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setCatUrl(data[0].url));
  
      fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then((response) => response.json())
        .then((data) => setQuote(data[0]));
    }, []);

  // handleNewCatImage fetches a new cat image and sets the new catUrl state. 
    const handleNewCatImage = () => {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setCatUrl(data[0].url));
    };
  
   // handleNewQuoteText chooses a random quote source from an array and sets the new quote state based on the response.
    const handleNewQuoteText = () => {
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
  // This is the return statement for the CatMemeCreator component. It creates a container for the cat meme with a title, the cat image, and the quote.
    return (
      <div className="meme-container">
        <div className="cat-container">
        <h3>Cat Meme generator </h3><br></br>
          <div
            className="cat-image-container"
            style={{ backgroundImage: `url(${catUrl})` }}
          >
            <p className="quote">{quote}</p>
          </div>
          <button className="new-cat-button" onClick={handleNewCatImage}>
            New Cat Image
           </button>
        </div>
        <div className="quote-container">
          <button className="new-quote-button" onClick={handleNewQuoteText}>
            New Quote
          </button>
        </div>
      </div>
    );
  };

  // same structure as in the CatMemeCreator
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
  
    const handleNewDogImage = () => {
      fetch("https://api.thedogapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => setDogUrl(data[0].url));
    };
  
    const handleNewQuoteText = () => {
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
        <h3>Dog Meme generator</h3><br/><br/>
          <div
            className="dog-image-container"
            style={{ backgroundImage: `url(${dogUrl})` }}
          >
            <p className="quote">{quote}</p>
          </div>
          <button className="new-cat-button" onClick={handleNewDogImage}>
            New Dog Image
          </button>
        </div>
        <div className="quote-container">
          <button className="new-quote-button" onClick={handleNewQuoteText}>
            New Quote
          </button>
        </div>
      </div>
    );
  };

  return (
        <>
          <div className='build-meme'>
          <CatMemeCreator />
          <DogMemeCreator />
          </div>
        </>
      ); 
}
