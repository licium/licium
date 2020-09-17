import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import { ISCCContext } from '../../App'
import Link from '@chakra-ui/core/dist/Link'
import { Link as ReachLink } from 'react-router-dom'
import styled from '@emotion/styled'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = () => {
    const { isccs, selectedEntries } = useContext(ISCCContext)

    return (
        <Flex direction="column" alignItems="center" marginTop="1em">
            <GenerateISCCButton />
            <Link as={ReachLink} to="/registration">
                <StyledButton isDisabled={selectedEntries.length === 0}>
                    Register selected ISCCs
                </StyledButton>
            </Link>

            <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(isccs)
                )}`}
                download="filename.json"
            >
                <StyledButton> {`Download JSON`}</StyledButton>
            </a>
        </Flex>
    )
}

export default Menu
