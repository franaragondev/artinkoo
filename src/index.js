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
import './Components/User/datosPersonales.css'
import './Components/User/misPedidos.css'
import './Components/User/ayuda.css'
import './Components/Carousel/carousel.css'
import './Components/Footer/footer.css'
import './Components/GoToTop/goToTop.css'
import './Components/Pages/ProductosHome/productosHome.css'
import './Components/Pages/Productos/productos.css'
import './Components/Pages/Producto/producto.css'
import './Components/Pages/Contactanos/contactanos.css'
import './Components/Pages/QuienesSomos/quienesSomos.css'

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
