import React from 'react';

import { Navbar, Footer, Hero } from './components';

import './App.css';

const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Hero />
                <Footer /> 
            </div>
        </div>
    )
}

export default App