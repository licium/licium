import React, {useState} from 'react'
import {Link, Text} from '@chakra-ui/core'
import Web3 from 'web3'

export const BlockchainEnabled = (props) => {
    const [isMetaMaskUnlocked, setMetaMaskUnlocked] = useState(false)

    const eth = window.ethereum

    const bootStrapMetamask = async () => {
        eth.on('connect', () => setMetaMaskUnlocked(true))
        eth.on('disconnect', () => setMetaMaskUnlocked(false))
        eth.on('chainChanged', () => {
            window.location.reload()
        })
        eth.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                setMetaMaskUnlocked(false)
            }
        })
        const accounts = await eth.request({
            method: 'eth_requestAccounts',
        })
        if (accounts) {
            setMetaMaskUnlocked(true)
        }
    }

    const ethEnabled = () => {
        if (eth) {
            window.web3 = new Web3(window.ethereum)
            bootStrapMetamask()
            return true
        }
        return false
    }
    return (
        <>
            {ethEnabled() ? (
                isMetaMaskUnlocked ? (
                    props.children
                ) : (
                    <div>Please unlock Metamask</div>
                )
            ) : (
                <Text>
                    Please install{' '}
                    <Link href="https://metamask.io/" target="_blank">
                        Metamask
                    </Link>{' '}
                    to use this dApp!
                </Text>
            )}
        </>
    )
}
