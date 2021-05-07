import React, { ReactChildren } from 'react'
import { Box, Grid } from '@chakra-ui/react'
import AppHeader from '../../components/AppHeader/AppHeader'
import PageTitle from '../../components/PageTitle/PageTitle'
import Menu from '../../components/Menu'

type AppScaffoldProps = {
    pageTitle: string
    children: ReactChildren
}

const AppScaffold = function ({ pageTitle, children }: AppScaffoldProps) {
    return (
        <Grid
            p="0.5em"
            templateRows={['auto', 'auto 1fr']}
            templateColumns={['auto', 'auto 1fr']}
            gridGap="2em"
        >
            <Box>
                <AppHeader />
            </Box>
            <PageTitle title={pageTitle} />
            <Box>
                <Menu />
            </Box>
            <Box>{children}</Box>
        </Grid>
    )
}

export default AppScaffold
