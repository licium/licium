import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { FaQrcode } from 'react-icons/all'

type ISCCBlockProps = {
    isccString: string
}
type ISCCPartProps = {
    title: string
    value: string
}

const Icon = () => {
    return <Box as={FaQrcode} size="32px" mr="1em" />
}

const ISCCPart = (props: ISCCPartProps) => {
    return (
        <Flex direction="column" w="150px" alignItems="center">
            <Box backgroundColor="gray.100" w="100%" textAlign="center">
                <Heading size="sm">{props.title}</Heading>
            </Box>
            <Text>{props.value}</Text>
        </Flex>
    )
}

const ISCCBlock = (props: ISCCBlockProps) => {
    const codes = props.isccString.split('-')

    return (
        <Flex direction="row" alignItems="center">
            <Icon />
            <ISCCPart title="Meta-Code" value={codes[0]} />
            <ISCCPart title="Content-Code" value={codes[1]} />
            <ISCCPart title="Data-Code" value={codes[2]} />
            <ISCCPart title="Instance-Code" value={codes[3]} />
        </Flex>
    )
}

export default ISCCBlock
