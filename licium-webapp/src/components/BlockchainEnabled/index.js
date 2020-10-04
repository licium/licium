import React, { useContext, useState } from 'react'
import { Box, Button, Heading, Input, Link, Stack, Text } from '@chakra-ui/core'
import Flex from '@chakra-ui/core/dist/Flex'
import { Logo } from '../Logo/Logo'
import { ReactComponent as MetamaskLogo } from './metamask-fox.svg'
import { BlockchainContext } from '../../contexts/BlockchainContext'

export const BlockchainEnabled = ({ children }) => {
    const {
        provider,
        loginToMagic,
        activateMetamask,
        isMetamaskAvailable,
    } = useContext(BlockchainContext)

    const [email, setEmail] = useState('')
    const [isLoading, setLoading] = useState(false)

    const submitEmail = async (e) => {
        e.preventDefault()
        setLoading(true)
        await loginToMagic(email)
        setLoading(false)
    }

    const enableMetamask = async () => {
        setLoading(true)
        await activateMetamask()
        setLoading(false)
    }

    return provider ? (
        children
    ) : (
        <Flex
            h="100vh"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            {provider}
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
            <Box hidden={isLoading || !isMetamaskAvailable}>-</Box>
            <Link
                onClick={() => enableMetamask()}
                hidden={isLoading || !isMetamaskAvailable}
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
