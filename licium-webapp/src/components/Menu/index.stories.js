import React from 'react'
import Menu from './index'
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider'
import { Box } from '@chakra-ui/core'

const withTheme = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>

export default {
    title: 'Menu',
    component: Menu,
    decorators: [withTheme],
}

export const Default = () => (
    <Box w="200px">
        <Menu />
    </Box>
)
