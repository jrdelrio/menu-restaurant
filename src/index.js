import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './front/components/Home';
import reportWebVitals from './reportWebVitals';

import AppProvider from "./front/store/appContext.js"; // Import your context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
