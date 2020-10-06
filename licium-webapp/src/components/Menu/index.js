import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import styled from '@emotion/styled'
import {
    BlockchainContext,
    BlockchainProviderName,
} from '../../contexts/BlockchainContext'
import { useActions, useState } from '../../overmind'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = ({ selectedEntries = [] }) => {
    const state = useState()
    const actions = useActions()
    const { provider } = useContext(BlockchainContext)
    const [isMenuDisabled, setMenuDisabled] = React.useState(false)

    const logout = async () => {
        setMenuDisabled(true)
        await provider.logout()
        setMenuDisabled(false)
    }

    return (
        <Flex direction="column" alignItems="center" marginTop="1em">
            <GenerateISCCButton disabled={isMenuDisabled} />
            <StyledButton
                disabled={selectedEntries.length === 0 || isMenuDisabled}
                onClick={() => actions.isccs.deleteIsccs(selectedEntries)}
            >
                Delete Selected Entries
            </StyledButton>
            <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(state.isccs.isccList)
                )}`}
                download="filename.json"
            >
                <StyledButton disabled={isMenuDisabled}>
                    {' '}
                    {`Download JSON`}
                </StyledButton>
            </a>
            {provider.providerName === BlockchainProviderName.MAGIC ? (
                <StyledButton onClick={() => logout()}>Logout</StyledButton>
            ) : (
                ''
            )}
        </Flex>
    )
}

export default Menu
