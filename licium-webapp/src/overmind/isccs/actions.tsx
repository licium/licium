import { Action } from 'overmind'

export const loadIsccs: Action = ({ effects, state }) => {
    state.isccs.isccs = effects.isccs.loadIsccsFromLocalstorage()
}

export const addIscc: Action<ISCC> = ({ effects, state }, iscc) => {
    state.isccs.isccs[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}

export const updateIscc: Action<ISCC> = ({ effects, state }, iscc) => {
    state.isccs.isccs[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}

export const deleteIsccs: Action<ISCC[]> = ({ effects, state }, toDelete) => {
    toDelete
        .map((item) => item.id)
        .forEach((id) => delete state.isccs.isccs[id])
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}
