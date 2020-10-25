import { derived } from 'overmind'
import { UserDataVersion } from '../../utils/constants'

type State = {
    userData: UserData
    selectedIsccs: ISCC[]
    isccList: ISCC[]
}

export const state: State = {
    userData: {
        version: UserDataVersion,
        entries: {},
    },
    selectedIsccs: [],
    isccList: derived((state: State) => Object.values(state.userData.entries)),
}
