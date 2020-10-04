import React, { useContext, useState } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import styled from '@emotion/styled'
import { ISCCContext } from '../../contexts/ISCCContext'
import {
    BlockchainContext,
    BlockchainProviderName,
} from '../../contexts/BlockchainContext'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = ({ selectedEntries = [] }) => {
    const { isccs, deleteIsccs } = useContext(ISCCContext)
    const { provider } = useContext(BlockchainContext)
    const [isMenuDisabled, setMenuDisabled] = useState(false)

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
                onClick={() => deleteIsccs(selectedEntries)}
            >
                Delete Selected Entries
            </StyledButton>
            <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(isccs)
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
