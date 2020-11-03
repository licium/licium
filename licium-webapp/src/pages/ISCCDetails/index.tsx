import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from '../../overmind'
import ISCCDetailsView from './ISCCDetailsView'

const ISCCDetails = () => {
    const { id } = useParams<{ id: string }>()
    const state = useState()
    const iscc: ISCC | undefined = state.isccs.isccList.find(
        (item) => item.id === id
    )

    return (
        <>
            {iscc ? (
                <ISCCDetailsView iscc={iscc} />
            ) : (
                `Sorry, there's no ISCC with the id ${id}.`
            )}
        </>
    )
}

export default ISCCDetails
