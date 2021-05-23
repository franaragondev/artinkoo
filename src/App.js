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
        <Route path='/producto/:idProducto' component={Producto} />
      </Switch>
    </Router>
  )
}

export default App
