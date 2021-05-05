import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import Home from './Components/Home/Home'

const App = () => {
  const [video, setVideo] = useState(true)

  const showMap = () => {
    setTimeout(() => {
      setVideo(false)
    }, 5000);
  }
  showMap()

  if (video == true) {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
