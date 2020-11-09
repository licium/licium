import Web3 from 'web3'
import ISCCRegistry from '../../../assets/contracts/ISCCRegistry.json'
import { Contract } from 'web3-eth-contract'

type ContractInstance = InstanceType<typeof Contract>

export abstract class Web3Container {
    protected abstract web3: Web3
    abstract walletAddress: string

    abstract isWalletActive: () => Promise<boolean>

    writeISCCToContract = async (iscc: ISCC) => {
        if (!(await this.isWalletActive())) {
            await this.activateWallet()
        }
        const contract: ContractInstance = new this.web3.eth.Contract(
            ISCCRegistry.abi as any,
            ISCCRegistry.networks['8995'].address
        )

        const [isccInHex, tophashInHex] = [
            iscc.iscc_raw,
            iscc.tophash,
        ].map((value) => this.web3.utils.hexToBytes(`0x${value}`))

        const contractMethod = contract.methods.declare(isccInHex, tophashInHex)

        return await contractMethod.send({ from: this.walletAddress })
    }

    abstract activateWallet: () => Promise<void>

    abstract logout: () => Promise<void>
}
