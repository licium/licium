import React from 'react'
import '../src/index.scss'
import { customTheme } from '../src/assets/styles/theme'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import { ToastContainer } from 'react-toastify'

export const decorators = [
    (Story) => (
        <ThemeProvider theme={customTheme}>
            <CSSReset />
            <Story />
            <ToastContainer />
        </ThemeProvider>
    ),
]
