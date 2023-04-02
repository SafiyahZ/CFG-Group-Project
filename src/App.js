import React from 'react';
import { Navbar, Footer } from './components';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Safiyah from './pages/Safiyah/Safiyah';
import Anca from './pages/Anca/Anca';
import Anju from './pages/Anju/Anju';
import Megha from './pages/Megha/Megha';
import Sade from './pages/Sade/Sade';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />   
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Safiyah" element={<Safiyah />} />
        <Route path="/Anca" element={<Anca />} />
        <Route path="/Anju" element={<Anju />} />
        <Route path="/Megha" element={<Megha />} />
        <Route path="/Sade" element={<Sade />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


