import { Action, AsyncAction } from 'overmind'

export const initialize: Action = ({ state, effects }) => {
    state.blockchain.isMetamaskAvailable = effects.blockchain.isMetamaskAvailable()
}

export const activateMetaMask: AsyncAction = async ({ state, effects }) => {
    state.blockchain.web3 = await effects.blockchain.loadWeb3WithMetamask()
    state.blockchain.walletAddress = (
        await state.blockchain.web3.eth.getAccounts()
    )[0]
    state.blockchain.provider = 'MetaMask'
}

export const loginToMagic: AsyncAction<string> = async (
    { state, effects },
    email
) => {
    state.blockchain.web3 = await effects.blockchain.loadWeb3WithMagic(email)
    state.blockchain.provider = 'magic'
    state.blockchain.walletAddress = (
        await state.blockchain.web3.eth.getAccounts()
    )[0]
}

export const logout: AsyncAction = async ({ state, effects }) => {
    effects.blockchain.logout()
    state.blockchain.provider = undefined
}

export const writeISCCToContract: AsyncAction<ISCC> = async (
    { state, actions, effects },
    iscc
) => {
    const { web3, walletAddress } = state.blockchain
    if (!web3 || !walletAddress) {
        return
    }
    try {
        const transaction = await effects.blockchain.writeISCCToContract(
            web3,
            walletAddress,
            iscc
        )
        const transactionHash = transaction.transactionHash
        const transactionLink = `https://blockexplorer.bloxberg.org/tx/${transactionHash}`
        actions.isccs.updateIscc({
            ...iscc,
            transactionLink,
            transactionHash,
        })
    } catch (error) {
        actions.common.showError(error)
    }
}
