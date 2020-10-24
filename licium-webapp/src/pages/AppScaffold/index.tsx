import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from '../../components/AppHeader/AppHeader'
import PageTitle from '../../components/PageTitle/PageTitle'
import Menu from '../../components/Menu'
import EntryTable from '../EntryTable'

const AppScaffold = () => {
    return (
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
                    <Route path="/">
                        <EntryTable />
                    </Route>
                </Switch>
            </Box>
        </Grid>
    )
}

export default AppScaffold
