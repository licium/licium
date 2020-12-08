import Web3 from 'web3'
import { Magic } from 'magic-sdk'

export interface WalletProvider {
    web3: Web3
    walletAddress: string
    magic?: Magic
}

type PopupPromise<T> = {
    resolve: (value?: void | PromiseLike<void> | undefined) => void
    reject: (reason?: any) => void
}

type State = {
    isMetamaskAvailable: boolean
    providerType: BlockchainProviderType
    walletProvider?: WalletProvider
    isChooseBlockchainProviderModalOpen: boolean
    chooseBlockchainPopupPromise: undefined | PopupPromise<void>
    activatingProvider: boolean
}

export const state: State = {
    isMetamaskAvailable: false,
    providerType: 'None',
    walletProvider: undefined,
    isChooseBlockchainProviderModalOpen: false,
    chooseBlockchainPopupPromise: undefined,
    activatingProvider: false,
}
