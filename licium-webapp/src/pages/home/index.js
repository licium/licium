import React from 'react'
import { Grid } from '@chakra-ui/core'
import Box from '@chakra-ui/core/dist/Box'
import AppHeader from '../../components/AppHeader/AppHeader'

const Home = () => (
    <Grid templateRows="100px 1fr " templateColumns="200px 1fr" gap="2px">
        <Box>
            <AppHeader />
        </Box>
        <Box>elem</Box>
        <Box>elem</Box>
        <Box>elem</Box>
    </Grid>
)

export default Home
