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

    const onModalClose = (type?: BlockchainProviderType, email?: string) => {
        if (type) {
            actions.blockchain.setBlockchainProviderType({ type, email })
        }
        actions.blockchain.closeChooseBlockchainProviderTypeModal()
    }

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
            <ChooseBlockchainModal
                isOpen={state.blockchain.isChoosBlockchainProviderModalOpen}
                onClose={(type, email) => onModalClose(type, email)}
            />
        </Flex>
    )
}
