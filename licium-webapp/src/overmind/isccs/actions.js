export const loadIsccs = ({ effects, state }) => {
    state.isccs.isccs = effects.isccs.loadIsccsFromLocalstorage()
}

export const addIscc = ({ effects, state }, iscc) => {
    state.isccs.isccs[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}

export const updateIscc = ({ effects, state }, iscc) => {
    state.isccs.isccs[iscc.id] = iscc
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}

export const deleteIsccs = ({ effects, state }, toDelete) => {
    toDelete
        .map((item) => item.id)
        .forEach((id) => delete state.isccs.isccs[id])
    effects.isccs.storeIsccsToLocalStorage(state.isccs.isccs)
}
