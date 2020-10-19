import { Action } from 'overmind'

export const initialize: Action = ({ state, effects }) => {
    state.blockchain.isMetamaskAvailable = effects.blockchain.isMetamaskAvailable()
}
