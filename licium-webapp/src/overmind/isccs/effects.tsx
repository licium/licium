const KEY = 'ISCCS'

export const loadIsccsFromLocalstorage = (): IndexedISCCS => {
    const initialValue = {}
    try {
        const item = window.localStorage.getItem(KEY)
        const loaded = item ? JSON.parse(item) : initialValue
        return typeof loaded === 'object' ? loaded : initialValue
    } catch (error) {
        console.log(error)
        return initialValue
    }
}

export const storeIsccsToLocalStorage = (isccs: IndexedISCCS) => {
    try {
        window.localStorage.setItem(KEY, JSON.stringify(isccs))
    } catch (error) {
        console.error(error)
    }
}