import { derived } from 'overmind'

type State = {
    isccs: IndexedISCCS
    isccList: ISCC[]
}

export const state: State = {
    isccs: {},
    isccList: derived((state: State) => Object.values(state.isccs)),
}
