import Web3 from 'web3'
import { Magic } from 'magic-sdk'
import ISCCRegistry from '../../assets/contracts/ISCCRegistry.json'
import { Contract } from 'web3-eth-contract'
import { WalletProvider } from './state'

type ContractInstance = InstanceType<typeof Contract>

const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
    network: {
        rpcUrl: 'https://core.bloxberg.org',
    },
})

export const isMetamaskAvailable = () => !!(window as any).ethereum

export const loadWeb3WithMetamask = async (): Promise<WalletProvider> => {
    const ethereum = (window as any).ethereum
    const web3 = new Web3(ethereum)
    await ethereum.enable()
    const accounts = await web3.eth.getAccounts()
    return {
        web3,
        walletAddress: accounts[0],
    }
}

export const loadWeb3WithMagic = async (
    email: string
): Promise<WalletProvider> => {
    await magic.auth.loginWithMagicLink({ email })
    const web3 = new Web3(magic.rpcProvider as any)
    const accounts = await web3.eth.getAccounts()
    return {
        web3,
        walletAddress: accounts[0],
        magic,
    }
}

export const logout = async () => {
    await magic.user.logout()
}

export const writeISCCToContract = async (
    web3: Web3,
    walletAddress: string,
    iscc: ISCC
) => {
    const contract: ContractInstance = new web3.eth.Contract(
        ISCCRegistry.abi as any,
        ISCCRegistry.networks['8995'].address
    )

    const [isccInHex, tophashInHex] = [
        iscc.iscc_raw,
        iscc.tophash,
    ].map((value) => web3.utils.hexToBytes(`0x${value}`))

    const contractMethod = contract.methods.declare(isccInHex, tophashInHex)

    return await contractMethod.send({ from: walletAddress })
}

export const loadTransaction = async (web3: Web3, transactionHash: string) => {
    return await web3.eth.getTransactionReceipt(transactionHash)
}
