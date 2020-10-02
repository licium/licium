import Web3 from 'web3'

export const BlockchainEnabled = ({ children }) => {
    window.web3 = new Web3(window.ethereum)
    return children
}
