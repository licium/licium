import Web3 from 'web3'
import { Magic } from 'magic-sdk'

const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
    network: {
        rpcUrl: 'https://core.bloxberg.org',
    },
})

export const isMetamaskAvailable = () => !!(window as any).ethereum

export const loadWeb3WithMetamask = async () => {
    const ethereum = (window as any).ethereum
    const web3 = new Web3(ethereum)
    await ethereum.request({ method: 'eth_requestAccounts' })
    return web3
}

export const loadWeb3WithMagic = async (email: string) => {
    await magic.auth.loginWithMagicLink({ email })
    return new Web3(magic.rpcProvider as any)
}

export const logout = async () => {
    await magic.user.logout()
}
