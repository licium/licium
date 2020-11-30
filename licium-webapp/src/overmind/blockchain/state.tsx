import Web3 from 'web3'
import { Magic } from 'magic-sdk'

export interface WalletProvider {
    web3: Web3
    walletAddress: string
    magic?: Magic
}

type State = {
    isMetamaskAvailable: boolean
    providerType: BlockchainProviderType
    walletProvider?: WalletProvider
    isChoosBlockchainProviderModalOpen: boolean
}

export const state: State = {
    isMetamaskAvailable: false,
    providerType: 'None',
    walletProvider: undefined,
    isChoosBlockchainProviderModalOpen: false,
}
