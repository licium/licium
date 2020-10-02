import React, { useState } from 'react'
import Web3 from 'web3'
import {
    Button,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    Tooltip,
} from '@chakra-ui/core'
import Flex from '@chakra-ui/core/dist/Flex'
import { Logo } from '../Logo/Logo'
import { ReactComponent as MetamaskLogo } from './metamask-fox.svg'

export const BlockchainEnabled = ({ children }) => {
    const [providerChosen, setProviderChosen] = useState(
        () => !!window.web3.eth.currentProvider
    )

    const activateMetamask = async () => {
        window.web3 = new Web3(window.ethereum)
        await window.web3.eth.requestAccounts()
        setProviderChosen(true)
    }
    return providerChosen ? (
        children
    ) : (
        <Flex
            h="100vh"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
        >
            <Logo size="sm" />
            <Heading as="h1" size="lg">
                Welcome to licium
            </Heading>
            <Tooltip label="Available soon" aria-label="Available soon">
                <form>
                    <Stack spacing={2}>
                        <Input disabled placeholder="Please enter your email" />
                        <Button disabled type="submit">
                            Login
                        </Button>
                    </Stack>
                </form>
            </Tooltip>
            <div>-</div>
            <Link onClick={() => activateMetamask()}>
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
