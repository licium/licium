import { UserDataVersion } from '../../utils/constants'

const KEY = 'ISCCS'

export const loadUserDataFromLocalStorage = (): UserData => {
    const initialValue = {
        version: UserDataVersion,
        entries: {},
    }
    try {
        const valueFromLocalstorage = window.localStorage.getItem(KEY)
        const parsedValue = valueFromLocalstorage
            ? JSON.parse(valueFromLocalstorage)
            : initialValue
        const parsedValueAsObject =
            typeof parsedValue === 'object' ? parsedValue : initialValue
        return parsedValueAsObject.version === UserDataVersion
            ? parsedValueAsObject
            : initialValue
    } catch (error) {
        console.log(error)
        return initialValue
    }
}

export const storeIsccsToLocalStorage = (userData: UserData) => {
    try {
        userData.version = UserDataVersion
        window.localStorage.setItem(KEY, JSON.stringify(userData))
    } catch (error) {
        console.error(error)
    }
}
