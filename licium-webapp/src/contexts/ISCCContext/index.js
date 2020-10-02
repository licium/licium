import React, { createContext } from 'react'
import { LOCAL_STORAGE_KEY_ISSCS } from '../../utils/constants'
import { useLocalStorage } from '../../hooks/localstorage'

export const ISCCContext = createContext({})

const ISCCContextProvider = ({ children }) => {
    const [isccs, setIsccs] = useLocalStorage(LOCAL_STORAGE_KEY_ISSCS, [])

    const updateIscc = (newIscc) => {
        setIsccs((currentIsccs) =>
            currentIsccs.map((existing) =>
                existing.iscc === newIscc.iscc ? newIscc : existing
            )
        )
    }

    const deleteIsccs = (isccsToDelete) => {
        setIsccs((currentIsccs) =>
            currentIsccs.filter((iscc) => !isccsToDelete.includes(iscc))
        )
    }

    const value = { isccs, setIsccs, updateIscc, deleteIsccs }

    return <ISCCContext.Provider value={value}>{children}</ISCCContext.Provider>
}

export default ISCCContextProvider
