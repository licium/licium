import { Box } from '@chakra-ui/core'
import React from 'react'

type ISCCDetailsViewProps = {
    iscc: ISCC
}
const ISCCDetailsView = ({ iscc }: ISCCDetailsViewProps) => {
    return (
        <Box>
            <Box>
                <pre>{JSON.stringify(iscc, undefined, 2)}</pre>
            </Box>
        </Box>
    )
}

export default ISCCDetailsView
