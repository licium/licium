import React, { createContext, useState } from 'react'
import { Magic } from 'magic-sdk'
import Web3 from 'web3'

export const BlockchainContext = createContext({})

export const BlockchainProviderName = {
    METAMASK: 'metamask',
    MAGIC: 'magic',
    NONE: 'none',
}

const BlockchainContextProvider = ({ children }) => {
    const [provider, setProvider] = useState(undefined)
    const [isMetamaskAvailable] = useState(() => !!window.ethereum)

    const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
        network: {
            rpcUrl: 'https://core.bloxberg.org',
        },
    })

    const activateWeb3 = async (providerName, web3, logout = undefined) => {
        const walletAddress = (await web3.eth.getAccounts())[0]
        setProvider({
            providerName,
            web3,
            walletAddress,
            logout,
        })
    }

    const loginToMagic = async (email) => {
        try {
            await magic.auth.loginWithMagicLink({ email })
            const web3 = new Web3(magic.rpcProvider)
            const logout = async () => {
                await magic.user.logout()
                setProvider(undefined)
            }
            await activateWeb3(BlockchainProviderName.MAGIC, web3, logout)
        } catch (e) {
            console.error(e.message)
        }
    }

    const activateMetamask = async () => {
        const web3 = new Web3(window.ethereum)
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        await activateWeb3(BlockchainProviderName.METAMASK, web3)
    }

    const value = {
        provider,
        loginToMagic,
        isMetamaskAvailable,
        activateMetamask,
    }

    return (
        <BlockchainContext.Provider value={value}>
            {children}
        </BlockchainContext.Provider>
    )
}

export default BlockchainContextProvider
