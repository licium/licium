import React, { createContext, useState } from 'react'
import './App.css'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from './components/AppHeader/AppHeader'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Assets from './components/Assets/Assets'
import Registration from './components/Registration/Registration'
import BlockchainContext from './components/BlockchainOutlet/BlockchainContext'
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess'
import Table from './components/EntryTable'
import { useLocalStorage } from './hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from './utils/constants'
import PageTitle from './components/PageTitle/PageTitle'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : ''

export const ISCCContext = createContext({})

function App() {
    const [selectedEntries, setSelectedEntries] = useState([])
    const [isccs, setIsccs] = useLocalStorage(LOCAL_STORAGE_KEY_ISSCS, [])

    const value = { isccs, setIsccs, selectedEntries, setSelectedEntries }

    return (
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
                            <Route path="/assets">
                                <Assets
                                    onAssetsSelected={(assets) =>
                                        setSelectedEntries(assets)
                                    }
                                />
                            </Route>
                            <Route path={'/registration'}>
                                <Registration
                                    assetsForRegistration={selectedEntries}
                                />
                            </Route>
                            <Route path={'/blockchain'}>
                                <BlockchainContext />
                            </Route>
                            <Route path={'/registrationSuccessful'}>
                                <RegistrationSuccess />
                            </Route>
                            >
                            <Route>
                                <Table />
                            </Route>
                        </Switch>
                    </Box>
                </Grid>
                {/*<AppHeader />
            <Switch>
                <Route path="/assets">
                    <Assets
                        onAssetsSelected={(assets) => setSelectedAssets(assets)}
                    />
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
                >
                <Route>
                    <Home />
                </Route>
            </Switch>*/}
            </Router>
        </ISCCContext.Provider>
    )
}

export default App
