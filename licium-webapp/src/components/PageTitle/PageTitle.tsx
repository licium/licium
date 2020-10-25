import React from 'react'
import { Flex } from '@chakra-ui/core'
import Heading from '@chakra-ui/core/dist/Heading'

type PageTitleProps = {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {
    return (
        <Flex justifyContent="start" alignItems="flex-end">
            <Heading size="lg">{title}</Heading>
        </Flex>
    )
}
