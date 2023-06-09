import React from 'react';
import { Navbar, Footer } from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dogs from './pages/Dogs/Dogs';
import Dog from './pages/Dog/Dog';
import Cats from './pages/Cats/Cats';
import Cat from './pages/Cat/Cat';
import Contact from './pages/Contact/Contact';
import RandomPet from './pages/RandomPet/RandomPet';
import BuildMeme from './pages/BuildMeme/BuildMeme';

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path=":name" element={<Dog />} />
        <Route path="/Dogs" element={<Dogs />} />
        <Route path=":catName" element={<Cat />} />
        <Route path="/Cats" element={<Cats />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/RandomPet" element={<RandomPet />} />
        <Route path="/BuildMeme" element={<BuildMeme />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


