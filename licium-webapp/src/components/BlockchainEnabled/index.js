import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { Box, Button, Heading, Input, Link, Stack, Text } from '@chakra-ui/core'
import Flex from '@chakra-ui/core/dist/Flex'
import { Logo } from '../Logo/Logo'
import { ReactComponent as MetamaskLogo } from './metamask-fox.svg'
import { Magic } from 'magic-sdk'

export const BlockchainEnabled = ({ children }) => {
    const [providerChosen, setProviderChosen] = useState(
        !!window.web3 && !!window.web3.eth.currentProvider
    )
    const [email, setEmail] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [walletAddress, setWalletAddress] = useState('')

    const activateMagicLink = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            const network = {
                rpcUrl: 'https://core.bloxberg.org',
            }
            const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
                network,
            })
            window.web3 = new Web3(magic.rpcProvider)
            await magic.auth.loginWithMagicLink({ email })
            const address = (await window.web3.eth.getAccounts())[0]
            setWalletAddress(address)
            setProviderChosen(true)
        } catch (e) {
            console.error(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const checkLogin = async () => {
            setLoading(true)
            const network = {
                rpcUrl: 'https://core.bloxberg.org',
            }
            const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
                network,
            })
            const isLoggedIn = await magic.user.isLoggedIn()

            setLoading(false)
            if (isLoggedIn) {
                window.web3 = new Web3(magic.rpcProvider)
                const address = (await window.web3.eth.getAccounts())[0]

                setWalletAddress(address)
                setProviderChosen(true)
            }
        }
        checkLogin()
    }, [])

    const activateMetamask = async () => {
        window.web3 = new Web3(window.ethereum)
        await window.web3.eth.requestAccounts()
        const address = (await window.web3.eth.getAccounts())[0]
        console.log(address)
        setWalletAddress(address)
        setProviderChosen(true)
    }
    return providerChosen ? (
        <Box>
            <Box>Your current Wallet address: {walletAddress}</Box>
            <Box>{children}</Box>
        </Box>
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
            <form onSubmit={(event) => activateMagicLink(event)}>
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
            <div hidden={isLoading}>-</div>
            <Link onClick={() => activateMetamask()} hidden={isLoading}>
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
