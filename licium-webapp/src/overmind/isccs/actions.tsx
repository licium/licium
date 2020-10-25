import { Action } from 'overmind'

export const initialize: Action = ({ effects, state }) => {
    console.log(effects.isccs.loadUserDataFromLocalStorage())
    state.isccs.userData = effects.isccs.loadUserDataFromLocalStorage()
}

export const addIscc: Action<ISCC> = ({ effects, state }, iscc) => {
    state.isccs.userData.entries[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.userData)
}

export const updateIscc: Action<ISCC> = ({ effects, state }, iscc) => {
    state.isccs.userData.entries[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.userData)
}

export const deleteIsccs: Action<ISCC[]> = ({ effects, state }) => {
    state.isccs.selectedIsccs
        .map((item) => item.id)
        .forEach((id) => delete state.isccs.userData.entries[id])
    effects.isccs.storeIsccsToLocalStorage(state.isccs.userData)
}

export const setSelectedISCCs: Action<ISCC[]> = ({ state }, selectedISCCs) => {
    state.isccs.selectedIsccs = selectedISCCs
}
