import React from 'react'
import { Box, Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import styled from '@emotion/styled'
import { useActions, useState } from '../../overmind'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = () => {
    const state = useState()
    const actions = useActions()

    const WalletBox = styled(Box)`
        line-break: anywhere;
        width: 50%;
        font-family: monospace;
    `

    return (
        <Flex direction="column" alignItems="center">
            <GenerateISCCButton />
            <StyledButton
                disabled={state.isccs.selectedIsccs.length === 0}
                onClick={() => actions.isccs.deleteIsccs()}
            >
                Delete Selected Entries
            </StyledButton>
            <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(state.isccs.isccList)
                )}`}
                download="filename.json"
            >
                <StyledButton disabled={false}> {`Download JSON`}</StyledButton>
            </a>
            <Box>Your Wallet Address:</Box>
            <WalletBox>{state.blockchain.walletAddress}</WalletBox>
        </Flex>
    )
}

export default Menu
