import React, { createContext } from 'react'
import { useLocalStorage } from '../../hooks/localstorage'
import { LOCAL_STORAGE_KEY_ISSCS } from '../../utils/constants'

export const ISCCContext = createContext({})

const ISCCContextProvider = ({ children }) => {
    const [isccs, setIsccs] = useLocalStorage(LOCAL_STORAGE_KEY_ISSCS, [])

    const updateIscc = (iscc) => {
        const mutableIsccs = isccs
        const id = mutableIsccs.findIndex(
            (existing) => existing.iscc === iscc.iscc
        )
        mutableIsccs[id] = iscc
        setIsccs([...mutableIsccs])
    }

    const value = { isccs, setIsccs, updateIscc }

    return <ISCCContext.Provider value={value}>{children}</ISCCContext.Provider>
}

export default ISCCContextProvider
