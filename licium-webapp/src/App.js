import React, { useEffect } from 'react'
import './App.css'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from './components/AppHeader/AppHeader'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageTitle from './components/PageTitle/PageTitle'
import EntryTable from './pages/EntryTable'
import { useActions } from './overmind'
import { Login } from './pages/Login'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

function App() {
    const actions = useActions()

    useEffect(() => {
        actions.isccs.initialize()
        actions.blockchain.initialize()
    }, [actions])

    return (
        <Login>
            <Router>
                <Grid
                    p="0.5em"
                    templateRows={['auto', 'auto 1fr']}
                    templateColumns={['auto', 'auto 1fr']}
                    gridGap="0.5em"
                >
                    <Box>
                        <AppHeader />
                    </Box>
                    <PageTitle />
                    <Box>
                        <Menu />
                    </Box>
                    <Box>
                        <Switch>
                            <Route>
                                <EntryTable />
                            </Route>
                        </Switch>
                    </Box>
                </Grid>
            </Router>
        </Login>
    )
}

export default App
