import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
// Selecting the DOM element with id 'root'
const container = document.getElementById('root');
// Creating a root for the React application
const root = createRoot(container);
// Rendering the App component with 'home' tab as a prop inside the root
root.render(<App tab='home' />);
