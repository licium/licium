import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import LabeledValue from '../../components/LabeledText'
import Badges from '../../components/Badges/Badges'
import ISCCBlock from '../../components/ISCCBlock/ISCCBlock'

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
            <Divider />
            <ISCCBlock isccString={iscc.iscc} />
        </Box>
    )
}

export default ISCCDetailsView
