import { Action, AsyncAction } from 'overmind'
import { Metamask } from './web3container/Metamask'
import { Magic } from './web3container/Magic'

export const logout: AsyncAction = async ({ state, effects }) => {
    effects.blockchain.logout()
    state.blockchain.providerType = 'None'
}

export const setBlockchainProviderType: Action<{
    type: BlockchainProviderType
    email?: string
}> = ({ state }, provider) => {
    state.blockchain.providerType = provider.type
    if (provider.type === 'Metamask') {
        state.blockchain.web3container = new Metamask()
    } else if (provider.type === 'Magic' && provider.email) {
        state.blockchain.web3container = new Magic(provider.email)
    }
}

export const openChooseBlockchainProviderTypeModal: Action = ({ state }) => {
    state.blockchain.isChoosBlockchainProviderModalOpen = true
}

export const closeChooseBlockchainProviderTypeModal: Action = ({ state }) => {
    state.blockchain.isChoosBlockchainProviderModalOpen = false
}

export const writeISCCToContract: AsyncAction<ISCC> = async (
    { state, actions, effects },
    iscc
) => {
    if (state.blockchain.web3container) {
        return await state.blockchain.web3container.writeISCCToContract(iscc)
    } else {
        actions.blockchain.openChooseBlockchainProviderTypeModal()
    }
}
