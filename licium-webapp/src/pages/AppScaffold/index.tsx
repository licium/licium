import React, { ReactChildren } from 'react'
import Grid from '@chakra-ui/core/dist/Grid'
import { Box } from '@chakra-ui/core'
import AppHeader from '../../components/AppHeader/AppHeader'
import PageTitle from '../../components/PageTitle/PageTitle'
import Menu from '../../components/Menu'

type AppScaffoldProps = {
    children: ReactChildren
}

const AppScaffold = function ({ children }: AppScaffoldProps) {
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
            <Box>{children}</Box>
        </Grid>
    )
}

export default AppScaffold
