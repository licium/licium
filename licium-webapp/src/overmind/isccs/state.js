import { derived } from 'overmind'

export const state = {
    isccs: {},
    isccList: derived((state) => Object.values(state.isccs)),
}
