import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/home' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  )
}

export default App
