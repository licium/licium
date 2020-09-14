import React, { useState } from 'react'
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
import { ISCCRegistration } from './components/ISCCRegistration/ISCCRegistration'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : ''

function App() {
    const [selectedAssets, setSelectedAssets] = useState([])
    return (
        <Router>
            <Grid
                gap="10px"
                templateRows="100px 1fr"
                templateColumns="320px 1fr"
                padding="5px"
            >
                <Box>
                    <AppHeader />
                </Box>
                <Flex alignItems="flex-end">
                    <Heading>ISCC-Registration</Heading>
                </Flex>
                <Box>
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
                            <ISCCRegistration />
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
    )
}

export default App
