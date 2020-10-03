import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import styled from '@emotion/styled'
import { ISCCContext } from '../../contexts/ISCCContext'
import { Magic } from 'magic-sdk'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = ({ selectedEntries = [] }) => {
    const { isccs, deleteIsccs } = useContext(ISCCContext)

    const logout = () => {
        const network = {
            rpcUrl: 'https://core.bloxberg.org',
        }
        const magic = new Magic('pk_test_CEB45261B7EC3A3F', {
            network,
        })
        magic.user.logout()
    }

    return (
        <Flex direction="column" alignItems="center" marginTop="1em">
            <GenerateISCCButton />
            <StyledButton
                disabled={selectedEntries.length === 0}
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
                <StyledButton> {`Download JSON`}</StyledButton>
            </a>
            <StyledButton onClick={() => logout()}>Logout</StyledButton>
        </Flex>
    )
}

export default Menu
