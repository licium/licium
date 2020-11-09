import Web3 from 'web3'
import { Web3Container } from './Web3Container'
import { Magic as MagicSDK } from 'magic-sdk'

const magic = new MagicSDK('pk_test_CEB45261B7EC3A3F', {
    network: {
        rpcUrl: 'https://core.bloxberg.org',
    },
})

export class Magic extends Web3Container {
    protected web3: Web3
    walletAddress: string = ''

    constructor(private email: string) {
        super()
        this.web3 = new Web3(magic.rpcProvider as any)
    }

    activateWallet = async () => {
        await magic.auth.loginWithMagicLink({ email: this.email })
        const accounts = await this.web3.eth.getAccounts()
        this.walletAddress = accounts[0]
    }

    logout = async () => {
        await magic.user.logout()
    }

    isWalletActive = (): Promise<boolean> => {
        return magic.user.isLoggedIn()
    }
}
