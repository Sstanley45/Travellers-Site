import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import AppProvider from './context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider >
    <App /> 
    </AppProvider>
  </React.StrictMode>
);






