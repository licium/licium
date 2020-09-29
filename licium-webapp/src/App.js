import React, { useState } from 'react'
import './App.css'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from './components/AppHeader/AppHeader'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageTitle from './components/PageTitle/PageTitle'
import EntryTable from './pages/EntryTable'
import { BlockchainEnabled } from './components/BlockchainEnabled'
import ISCCContextProvider from './contexts/ISCCContext'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

function App() {
    const [selectedEntries, setSelectedEntries] = useState()

    return (
        <BlockchainEnabled>
            <ISCCContextProvider>
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
                            <Menu selectedEntries={selectedEntries} />
                        </Box>
                        <Box>
                            <Switch>
                                <Route>
                                    <EntryTable
                                        onEntriesSelected={(entries) =>
                                            setSelectedEntries(entries)
                                        }
                                    />
                                </Route>
                            </Switch>
                        </Box>
                    </Grid>
                </Router>
            </ISCCContextProvider>
        </BlockchainEnabled>
    )
}

export default App
