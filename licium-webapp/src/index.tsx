import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bulma/css/bulma.min.css'
import { addItems } from './store/asset/assetSlice'
import { manyDemoItems } from './components/AssetsTable/manyDemoItems'

store.dispatch(addItems(manyDemoItems))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
