import Web3 from 'web3'
import { Magic } from 'magic-sdk'

type State = {
    isMetamaskAvailable: boolean
    provider: BlockchainProviderType
    web3?: Web3
    walletAddress?: string
    magic?: Magic
    isChoosBlockchainProviderModalOpen: boolean
}

export const state: State = {
    isMetamaskAvailable: false,
    provider: 'None',
    web3: undefined,
    walletAddress: undefined,
    magic: undefined,
    isChoosBlockchainProviderModalOpen: false,
}
