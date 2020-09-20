import React, { useState } from 'react'
import { IconButton, ListItem } from '@chakra-ui/core'
import { BLOCKCHAIN_NETWORKS } from '../../../utils/constants'
import { InfoButton } from '../index'

export const RegisteredButton = (props) => {
    const [iscc] = useState(props.iscc)

    const renderRegistrationListItems = (registration) => (
        <>
            <ListItem>
                <strong>Registry: </strong>
                {BLOCKCHAIN_NETWORKS[registration.usedBlockchain]}
            </ListItem>
            <ListItem>
                <strong>Registration Address: </strong>
                {registration.usedPublisherAddress}
            </ListItem>
        </>
    )
    return (
        <>
            {iscc.registration ? (
                <InfoButton
                    variantColor="green"
                    title="Registration Info"
                    icon="check"
                    placement="left"
                >
                    {renderRegistrationListItems(iscc.registration)}
                </InfoButton>
            ) : (
                <IconButton
                    isDisabled
                    icon="close"
                    size="sm"
                    variantColor="red"
                    aria-label="Not registered"
                />
            )}
        </>
    )
}
