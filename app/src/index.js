import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tickle from './Tickle';
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tickle />
  </React.StrictMode>
);

reportWebVitals()