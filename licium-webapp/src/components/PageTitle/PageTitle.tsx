import React from 'react'
import { Flex } from '@chakra-ui/core'
import Heading from '@chakra-ui/core/dist/Heading'
import BlockchainProviderIndicator from '../BlockchainProviderIndicator'

type PageTitleProps = {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {
    return (
        <Flex direction="column" justifyContent="space-between">
            <Flex direction="row" justifyContent="flex-end">
                <BlockchainProviderIndicator
                    providerType={'Metamask'}
                    onClick={() => {}}
                />
            </Flex>
            <Flex direction="row">
                <Heading size="lg" alignSelf="end">
                    {title}
                </Heading>
            </Flex>
        </Flex>
    )
}
