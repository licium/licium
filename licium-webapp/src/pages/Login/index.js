import React from 'react'
import { Box, Button, Heading, Input, Link, Stack, Text } from '@chakra-ui/core'
import Flex from '@chakra-ui/core/dist/Flex'
import { ReactComponent as MetamaskLogo } from './metamask-fox.svg'
import { useActions, useState } from '../../overmind'
import { Logo } from '../../components/Logo/Logo'

export const Login = ({ children }) => {
    const state = useState()
    const actions = useActions()

    const [email, setEmail] = React.useState('')
    const [isLoading, setLoading] = React.useState(false)

    const submitEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        await actions.blockchain.loginToMagic(email)
        setLoading(false)
    }

    const enableMetamask = async () => {
        setLoading(true)
        await actions.blockchain.activateMetaMask()
        setLoading(false)
    }

    return state.blockchain.provider ? (
        children
    ) : (
        <Flex
            h="100vh"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            {actions.blockchain.provider}
            <Logo size="sm" />
            <Heading as="h1" size="lg">
                Welcome to licium
            </Heading>
            <form onSubmit={(event) => submitEmail(event)}>
                <Stack spacing={2}>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        isRequired={true}
                        isDisabled={isLoading}
                        placeholder="Please enter your email"
                    />
                    <Button type="submit" isLoading={isLoading}>
                        Login
                    </Button>
                </Stack>
            </form>
            <Box hidden={isLoading || !state.blockchain.isMetamaskAvailable}>
                -
            </Box>
            <Link
                onClick={() => enableMetamask()}
                hidden={isLoading || !state.blockchain.isMetamaskAvailable}
            >
                <Flex flexDir="column" alignItems="center">
                    <MetamaskLogo />
                    <Text fontSize="sm">
                        Click the icon if you prefer metamask
                    </Text>
                </Flex>
            </Link>
        </Flex>
    )
}
