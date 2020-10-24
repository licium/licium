import { derived } from 'overmind'

type State = {
    isccs: IndexedISCCS
    selectedIsccs: ISCC[]
    isccList: ISCC[]
}

export const state: State = {
    isccs: {},
    selectedIsccs: [],
    isccList: derived((state: State) => Object.values(state.isccs)),
}
