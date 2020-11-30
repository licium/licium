import React from 'react'
import { Flex } from '@chakra-ui/core'
import Heading from '@chakra-ui/core/dist/Heading'
import BlockchainProviderIndicator from '../BlockchainProviderIndicator'
import { useActions, useState } from '../../overmind'
import ChooseBlockchainModal from '../ChooseBlockchainModal/ChooseBlockchainModal'

type PageTitleProps = {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {
    const state = useState()
    const actions = useActions()

    return (
        <Flex direction="column" justifyContent="space-between">
            <Flex direction="row" justifyContent="flex-end">
                <BlockchainProviderIndicator
                    providerType={state.blockchain.providerType}
                    onClick={() =>
                        actions.blockchain.openChooseBlockchainProviderTypeModal()
                    }
                />
            </Flex>
            <Flex direction="row">
                <Heading size="lg" alignSelf="end">
                    {title}
                </Heading>
            </Flex>
            <ChooseBlockchainModal />
        </Flex>
    )
}
