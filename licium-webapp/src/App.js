import React, { useEffect } from 'react'
import './App.css'
import { useActions, useState } from './overmind'
import AppScaffold from './pages/AppScaffold'
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
} from 'react-router-dom'
import { Login } from './pages/Login'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

function App() {
    const actions = useActions()

    useEffect(() => {
        actions.isccs.initialize()
        actions.blockchain.initialize()
    }, [actions])

    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <BlockchainEnabledContent path="/">
                    <AppScaffold />
                </BlockchainEnabledContent>
            </Switch>
        </Router>
    )
}

function BlockchainEnabledContent({ children, ...rest }) {
    const state = useState()

    return (
        <Route
            {...rest}
            render={({ location }) =>
                state.blockchain.provider ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export default App
