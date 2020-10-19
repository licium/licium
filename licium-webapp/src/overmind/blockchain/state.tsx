import Web3 from 'web3'
import { Magic } from 'magic-sdk'

type State = {
    isMetamaskAvailable: boolean
    provider?: 'MetaMask' | 'magic'
    web3?: Web3
    walletAddress?: string
    magic?: Magic
}

export const state: State = {
    isMetamaskAvailable: false,
    provider: undefined,
    web3: undefined,
    walletAddress: undefined,
    magic: undefined,
}
