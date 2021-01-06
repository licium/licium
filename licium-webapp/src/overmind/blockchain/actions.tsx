import { Action, AsyncAction } from 'overmind'
import ISCCRegistry from '../../assets/contracts/ISCCRegistry.json'
import { Contract } from 'web3-eth-contract'

type ContractInstance = InstanceType<typeof Contract>

export const logout: AsyncAction = async ({ state, effects }) => {
    effects.blockchain.logout()
    state.blockchain.providerType = 'None'
}

export const setBlockchainProviderType: AsyncAction<{
    type: BlockchainProviderType
    email?: string
}> = async ({ state, effects }, provider) => {
    state.blockchain.activatingProvider = true
    state.blockchain.providerType = provider.type
    if (provider.type === 'Metamask') {
        state.blockchain.walletProvider = await effects.blockchain.loadWeb3WithMetamask()
    } else if (provider.type === 'Magic' && provider.email) {
        state.blockchain.walletProvider = await effects.blockchain.loadWeb3WithMagic(
            provider.email
        )
    }
    state.blockchain.chooseBlockchainPopupPromise?.resolve()
    state.blockchain.activatingProvider = false
    state.blockchain.isChooseBlockchainProviderModalOpen = false
}

export const openChooseBlockchainProviderTypeModal: AsyncAction = async ({
    state,
}) => {
    state.blockchain.isChooseBlockchainProviderModalOpen = true
    return new Promise<void>((resolve, reject) => {
        state.blockchain.chooseBlockchainPopupPromise = { resolve, reject }
    })
}

export const closeChooseBlockchainProviderTypeModal: Action = ({ state }) => {
    state.blockchain.isChooseBlockchainProviderModalOpen = false
    state.blockchain.chooseBlockchainPopupPromise?.reject('popup closed')
}

export const writeISCCToContract: AsyncAction<ISCC> = async (
    { state, actions, effects },
    iscc
) => {
    const { walletProvider } = state.blockchain
    if (walletProvider) {
        const { web3, walletAddress } = walletProvider
        const contract: ContractInstance = new web3.eth.Contract(
            ISCCRegistry.abi as any,
            ISCCRegistry.networks['8995'].address
        )

        const [isccInHex, tophashInHex] = [
            iscc.iscc_raw,
            iscc.tophash,
        ].map((value) => web3.utils.hexToBytes(`0x${value}`))

        const contractMethod = contract.methods.declare(isccInHex, tophashInHex)

        const transactionObject = await contractMethod.send({
            from: walletAddress,
        })
        const transactionLink = `https://blockexplorer.bloxberg.org/tx/${transactionObject.transactionHash}`
        const updatedIscc = {
            ...iscc,
            transactionLink,
            transactionHash: transactionObject,
        }
        actions.isccs.updateIscc(updatedIscc)
    }
}
