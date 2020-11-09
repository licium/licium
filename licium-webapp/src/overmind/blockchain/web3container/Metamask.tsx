import Web3 from 'web3'
import { Web3Container } from './Web3Container'

export class Metamask extends Web3Container {
    private ethereum = (window as any).ethereum
    protected web3: Web3
    walletAddress: string = ''

    constructor() {
        super()
        this.web3 = new Web3(this.ethereum)
    }

    activateWallet = async () => {
        const accounts = await this.ethereum.request({
            method: 'eth_requestAccounts',
        })
        this.walletAddress = accounts[0]
    }

    logout = async () => {
        //Do nothing
    }

    isWalletActive = async () => (await this.web3.eth.getAccounts()).length > 0
}
