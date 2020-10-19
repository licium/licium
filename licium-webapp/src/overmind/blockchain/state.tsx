type State = {
    isMetamaskAvailable: boolean
    provider?: 'MetaMask'
}

export const state: State = {
    isMetamaskAvailable: false,
    provider: undefined,
}
