import React, { PropsWithChildren } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

type LabeledTextProps = {
    label: string
}

const LabeledValue = ({
    label,
    children,
}: PropsWithChildren<LabeledTextProps>) => {
    return (
        <Box mb="0.5em">
            <Heading size="sm" fontWeight="bold">
                {label}
            </Heading>
            <Text pl="0.5em">{children}</Text>
        </Box>
    )
}

export default LabeledValue
