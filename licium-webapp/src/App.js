import React, { useEffect } from 'react'
import './App.css'
import { useActions } from './overmind'
import AppScaffold from './pages/AppScaffold'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EntryTable from './pages/EntryTable'
import ISCCDetails from './pages/ISCCDetails'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

function App() {
    const actions = useActions()

    useEffect(() => {
        actions.isccs.initialize()
    }, [actions])

    return (
        <Router>
            <Switch>
                <ApplicationRoute path="/:id" pageTitle="Details">
                    <ISCCDetails />
                </ApplicationRoute>
                <ApplicationRoute path="/" pageTitle="ISCC Entries">
                    <EntryTable />
                </ApplicationRoute>
            </Switch>
        </Router>
    )
}

function ApplicationRoute({ pageTitle, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => (
                <AppScaffold pageTitle={pageTitle}>{children}</AppScaffold>
            )}
        />
    )
}

export default App
