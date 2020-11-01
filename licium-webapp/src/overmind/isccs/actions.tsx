import { Action, AsyncAction } from 'overmind'
import { v4 as uuidv4 } from 'uuid'

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

export const generateISCCFromFile: AsyncAction<File> = async (
    { state, actions, effects },
    file
) => {
    try {
        const iscc = await effects.isccs.generateISCCFromFile(file)
        actions.isccs.addIscc({
            ...iscc,
            filename: file.name,
            id: uuidv4(),
            date: new Date().toISOString(),
        })
    } catch (e) {
        actions.common.showError(e)
    }
}

export const writeTransactionToMetaRegistry: AsyncAction<ISCC> = async (
    { state, actions, effects },
    iscc
) => {
    if (!state.blockchain.walletAddress) {
        //TODO: Implement blockchain so that walletAddress is never undefinded
        return
    }
    try {
        const shortcode = await effects.isccs.writeTransactionToMetaRegistry(
            iscc,
            state.blockchain.walletAddress
        )
        const registrationId = shortcode.iscc_id
        actions.isccs.updateIscc({
            ...iscc,
            registrationId,
        })
    } catch (e) {
        actions.common.showError(e)
    }
}
