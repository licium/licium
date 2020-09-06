import React, { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Assets, { AssetItem } from './components/Assets/Assets'
import Welcome from './components/Welcome/Welcome'
import Registration from './components/Registration/Registration'
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess'
import BlockchainContext from './components/BlockchainOutlet/BlockchainContext'
import { ISCCRegistration } from './components/ISCCRegistration/ISCCRegistration'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : ''

function App() {
  const [selectedAssets, setSelectedAssets] = useState<AssetItem[]>([])
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/assets">
          <Assets onAssetsSelected={(assets) => setSelectedAssets(assets)} />
        </Route>
        <Route path={'/registration'}>
          <Registration assetsForRegistration={selectedAssets} />
        </Route>
        <Route path={'/blockchain'}>
          <BlockchainContext />
        </Route>
        <Route path={'/registrationSuccessful'}>
          <RegistrationSuccess />
        </Route>
        <Route path={'/iscc-registration'}>
          <ISCCRegistration />
        </Route>
        <Route>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
