import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from '../../overmind'
import { Box } from '@chakra-ui/core'

const ISCCDetails = () => {
    const { id } = useParams<{ id: string }>()
    const state = useState()
    const iscc: ISCC | undefined = state.isccs.isccList.find(
        (item) => item.id === id
    )

    React.useEffect(() => {}, [])

    return (
        <Box>
            {!iscc ? (
                `Sorry, there's no ISCC with the id ${id}.`
            ) : (
                <pre>{JSON.stringify(iscc, undefined, 2)}</pre>
            )}
        </Box>
    )
}

export default ISCCDetails
