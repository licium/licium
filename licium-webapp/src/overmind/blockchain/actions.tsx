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
    //fixme: ensure those values are always available
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
        const updatedIscc = {
            ...iscc,
            transactionLink,
            transactionHash,
        }
        actions.isccs.updateIscc(updatedIscc)
        actions.blockchain.loadTransaction(updatedIscc)
    } catch (error) {
        actions.common.showError(error)
    }
}

export const loadTransaction: AsyncAction<ISCC> = async (
    { state, actions, effects },
    iscc
) => {
    //fixme: ensure those values are always available
    if (!state.blockchain.web3) {
        return
    }
    try {
        const receipt = await effects.blockchain.loadTransaction(
            state.blockchain.web3,
            iscc.transactionHash
        )
        const transactionReceipts = [...iscc.transactionReceipts, receipt]

        actions.isccs.updateIscc({
            ...iscc,
            transactionReceipts,
        })
    } catch (error) {
        actions.common.showError(error)
    }
}
