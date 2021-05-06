import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './jq.js'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Components/LandingPage/landingPage.css'
import './Components/Home/home.css'
import './Components/Header/header.css'
import './Components/Login/login.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
