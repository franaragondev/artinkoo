import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'
import DatosPersonales from './Components/User/DatosPersonales'
import MisPedidos from './Components/User/MisPedidos'
import Ayuda from './Components/User/Ayuda'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/datosPersonales' exact component={DatosPersonales} />
        <Route path='/misPedidos' exact component={MisPedidos} />
        <Route path='/ayuda' exact component={Ayuda} />
      </Switch>
    </Router>
  )
}

export default App
