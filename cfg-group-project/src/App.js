import React from 'react';

import { Blog, Navbar, Footer } from './containers';
import { Feature, Button } from './components';
import './App.css';

const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                {/* <Footer /> */}
            </div>
            {/* <Blog />
            <Feature />
            <Button /> */}
        </div>
    )
}

export default App