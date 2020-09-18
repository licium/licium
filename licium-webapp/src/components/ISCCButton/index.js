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
import { FaQrcode } from 'react-icons/all'
import { splitEvery } from 'ramda'

export const ISCCButton = (props) => {
    const [placement] = useState(props.placement || 'bottom')
    const [iscc] = useState(props.iscc)

    const isccCodeList = (iscc) => {
        const codes = iscc.split('-')
        const codeObject = {
            'Meta-ID': codes[0],
            'Content-ID': codes[1],
            'Data-ID': codes[2],
            'Instance-ID': codes[3],
        }
        return Object.keys(codeObject).map((key, idx) => (
            <ListItem key={idx}>
                <strong>{key}:</strong> {codeObject[key]}
            </ListItem>
        ))
    }

    const breakTophash = (tophash) => splitEvery(32, tophash).join(' ')

    return (
        <Popover>
            <PopoverTrigger>
                <IconButton size="sm" icon={FaQrcode} aria-label="registered" />
            </PopoverTrigger>
            <PopoverContent zIndex={4} w="1000px" placement={placement}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Iscc Info</PopoverHeader>
                <PopoverBody>
                    <List textAlign="left">
                        {isccCodeList(iscc.iscc)}
                        <ListItem>
                            <strong>Tophash:</strong>{' '}
                            {breakTophash(iscc.tophash)}
                        </ListItem>
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
