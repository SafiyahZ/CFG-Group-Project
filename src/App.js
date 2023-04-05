import React from 'react';
import { Navbar, Footer } from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pets from './pages/Pets/Pets';
import Dog from './pages/Dog/Dog';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/:name" element={<Dog />} />
        <Route path="/Pets" element={<Pets />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


