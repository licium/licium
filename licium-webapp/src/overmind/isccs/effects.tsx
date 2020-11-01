import { UserDataVersion } from '../../utils/constants'
import { API_PATH } from '../../App'

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

export const generateISCCFromFile = async (file: File): Promise<ISCC> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', '')
    formData.append('extr', '')
    const response = await fetch(`${API_PATH}/generate/from_file`, {
        method: 'POST',
        body: formData,
    })
    if (response.status !== 200) {
        throw new Error(
            `Error During ISCC Generation (Status ${response.status})`
        )
    }
    return await response.json()
}
