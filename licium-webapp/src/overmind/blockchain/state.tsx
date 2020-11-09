import { Web3Container } from './web3container/Web3Container'

type State = {
    isMetamaskAvailable: boolean
    providerType: BlockchainProviderType
    web3container?: Web3Container
    isChoosBlockchainProviderModalOpen: boolean
}

export const state: State = {
    isMetamaskAvailable: false,
    providerType: 'None',
    web3container: undefined,
    isChoosBlockchainProviderModalOpen: false,
}
