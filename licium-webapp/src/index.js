import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { customTheme } from './assets/styles/theme'
import { createOvermind } from 'overmind'
import { config } from './overmind'
import { Provider } from 'overmind-react'
import { ToastContainer } from 'react-toastify'
const overmind = createOvermind(config)

ReactDOM.render(
    <Provider value={overmind}>
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <App />
            <ToastContainer />
        </ThemeProvider>
    </Provider>,

    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
