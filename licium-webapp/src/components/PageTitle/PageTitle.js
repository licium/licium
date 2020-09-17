import React from 'react'
import { useLocation } from 'react-router-dom'
import { Flex } from '@chakra-ui/core'
import Heading from '@chakra-ui/core/dist/Heading'

const titles = {
    '/': 'ISCC Entries',
    '/registration': 'Register ISCCs',
}

export default function PageTitle() {
    const location = useLocation()

    const title = titles[location.pathname]

    return (
        <Flex justifyContent="start" alignItems="flex-end">
            <Heading size="lg">{title}</Heading>
        </Flex>
    )
}
