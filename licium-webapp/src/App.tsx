import React from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Assets from './components/Assets/Assets'
import Welcome from './components/Welcome/Welcome'
import Registration from './components/Registration/Registration'

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/assets">
          <Assets />
        </Route>
        <Route path={'/registration'}>
          <Registration />
        </Route>
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
