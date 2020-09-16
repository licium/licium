import React, { createContext, useState } from 'react'
import './App.css'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box, Flex, Heading } from '@chakra-ui/core'
import AppHeader from './components/AppHeader/AppHeader'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Assets from './components/Assets/Assets'
import Registration from './components/Registration/Registration'
import BlockchainContext from './components/BlockchainOutlet/BlockchainContext'
import RegistrationSuccess from './components/RegistrationSuccess/RegistrationSuccess'
import theme from '@chakra-ui/core/dist/theme'
import Table from './components/EntryTable'
import { useLocalStorage } from './hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from './utils/constants'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : ''

export const ISCCContext = createContext({
    isccEntries: [],
    setEntries: () => {},
})

function App() {
    const [selectedAssets, setSelectedAssets] = useState([])
    const [isccs, setIsccs] = useLocalStorage(LOCAL_STORAGE_KEY_ISSCS, [])

    const value = { isccs, setIsccs }

    return (
        <ISCCContext.Provider value={value}>
            <Router>
                <Grid
                    templateRows="100px 1fr"
                    templateColumns="320px 1fr"
                    padding="5px"
                >
                    <Box backgroundColor={theme.colors.gray['300']}>
                        <AppHeader />
                    </Box>
                    <Flex
                        alignItems="flex-end"
                        backgroundColor={theme.colors.gray['300']}
                    >
                        <Heading>ISCC-Registration</Heading>
                    </Flex>
                    <Box backgroundColor={theme.colors.gray['300']}>
                        <Menu />
                    </Box>
                    <Box>
                        <Switch>
                            <Route path="/assets">
                                <Assets
                                    onAssetsSelected={(assets) =>
                                        setSelectedAssets(assets)
                                    }
                                />
                            </Route>
                            <Route path={'/registration'}>
                                <Registration
                                    assetsForRegistration={selectedAssets}
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
