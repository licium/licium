import React, { useState } from 'react'
import {
    IconButton,
    List,
    ListItem,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/core'
import { BLOCKCHAIN_NETWORKS } from '../../utils/constants'

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
                <Popover placement="left">
                    <PopoverTrigger>
                        <IconButton
                            size="sm"
                            icon="check"
                            variantColor="green"
                            aria-label="registered"
                        />
                    </PopoverTrigger>
                    <PopoverContent zIndex={4}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Registration Info</PopoverHeader>
                        <PopoverBody>
                            <List textAlign="left">
                                {renderRegistrationListItems(iscc.registration)}
                            </List>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
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
