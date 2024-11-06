// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your App component

// Create a root element using React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App component with BrowserRouter to enable routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
