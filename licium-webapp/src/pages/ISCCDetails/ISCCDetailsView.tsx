import { Box } from '@chakra-ui/core'
import React from 'react'
import LabeledValue from '../../components/LabeledText'
import Badges from '../../components/Badges/Badges'

type ISCCDetailsViewProps = {
    iscc: ISCC
}
const ISCCDetailsView = ({ iscc }: ISCCDetailsViewProps) => {
    return (
        <Box>
            <LabeledValue label="Title">{iscc.title}</LabeledValue>
            <LabeledValue label="Filename">
                {iscc.filename?.split('.')[0] || ''}
            </LabeledValue>
            <LabeledValue label="Media Type">File</LabeledValue>
            <LabeledValue label={'Tags'}>
                <Badges badges={['Important', 'Favorite']} />
            </LabeledValue>
            <LabeledValue label={'Filetype'}>
                {iscc.filename?.split('.')[1] || ''}
            </LabeledValue>
        </Box>
    )
}

export default ISCCDetailsView
