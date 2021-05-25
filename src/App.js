import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import DatosPersonales from './Components/User/DatosPersonales'
import MisPedidos from './Components/User/MisPedidos'
import Ayuda from './Components/User/Ayuda'
import Productos from './Components/Pages/Productos/Productos'
import Producto from './Components/Pages/Producto/Producto'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Contactanos from './Components/Pages/Contactanos/Contactanos'
import QuienesSomos from './Components/Pages/QuienesSomos/QuienesSomos'
import PoliticaPrivacidad from './Components/Pages/PoliticaPrivacidad/PoliticaPrivacidad'
import EnviosDevoluciones from './Components/Pages/EnviosDevoluciones/EnviosDevoluciones'
import Aloju from './Components/Pages/Aloju/Aloju'

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/datosPersonales' component={DatosPersonales} />
        <Route path='/misPedidos' component={MisPedidos} />
        <Route path='/ayuda' component={Ayuda} />
        <Route path='/productos' component={Productos} />
        <Route path='/producto/:idCategoria/:idProducto' component={Producto} />
        <Route path='/contactanos' component={Contactanos} />
        <Route path='/quienesSomos' component={QuienesSomos} />
        <Route path='/politicaPrivacidad' component={PoliticaPrivacidad} />
        <Route path='/enviosDevoluciones' component={EnviosDevoluciones} />
        <Route path='/aloju' component={Aloju} />
      </Switch>
    </Router>
  )
}

export default App
