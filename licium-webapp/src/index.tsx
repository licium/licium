import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulma/css/bulma.min.css'
import Greeter from './assets/contracts/Greeter.json'
// @ts-ignore
import { DrizzleContext } from '@drizzle/react-plugin'
// @ts-ignore
import { Drizzle } from '@drizzle/store'

const drizzleOptions = {
  contracts: [Greeter],
  events: {},
}

const drizzle = new Drizzle(drizzleOptions as any)

ReactDOM.render(
  <React.StrictMode>
    <DrizzleContext.Provider drizzle={drizzle}>
      <App />
    </DrizzleContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
