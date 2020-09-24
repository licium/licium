import React, { createContext, useState } from 'react'
import './App.css'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from './components/AppHeader/AppHeader'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useLocalStorage } from './hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from './utils/constants'
import PageTitle from './components/PageTitle/PageTitle'
import Registration from './pages/Registration/Registration'
import Table from './pages/EntryTable'
import { BlockchainEnabled } from './components/BlockchainEnabled'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

export const ISCCContext = createContext({})

function App() {
    const [selectedEntries, setSelectedEntries] = useState([])
    const [isccs, setIsccs] = useLocalStorage(LOCAL_STORAGE_KEY_ISSCS, [])

    const value = { isccs, setIsccs, selectedEntries, setSelectedEntries }

    return (
        <BlockchainEnabled>
            <ISCCContext.Provider value={value}>
                <Router>
                    <Grid
                        templateRows="100px 1fr"
                        templateColumns="200px 1fr"
                        padding="5px"
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
                                <Route path={'/registration'}>
                                    <Registration />
                                </Route>
                                <Route>
                                    <Table />
                                </Route>
                            </Switch>
                        </Box>
                    </Grid>
                </Router>
            </ISCCContext.Provider>
        </BlockchainEnabled>
    )
}

export default App
