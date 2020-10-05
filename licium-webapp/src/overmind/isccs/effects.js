export const loadIsccsFromLocalstorage = () => {
    const initialValue = []
    try {
        const item = window.localStorage.getItem('ISCCS')
        return item ? JSON.parse(item) : initialValue
    } catch (error) {
        console.log(error)
        return initialValue
    }
}
