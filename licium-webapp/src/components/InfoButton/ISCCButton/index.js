import React, { useState } from 'react'
import { List, ListItem } from '@chakra-ui/core'
import { FaQrcode } from 'react-icons/all'
import { splitEvery } from 'ramda'
import { InfoButton } from '../index'

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
        <InfoButton icon={FaQrcode} placement="bottom" title="Icc Info">
            <List textAlign="left">
                {isccCodeList(iscc.iscc)}
                <ListItem>
                    <strong>Tophash:</strong> {breakTophash(iscc.tophash)}
                </ListItem>
            </List>
        </InfoButton>
    )
}
