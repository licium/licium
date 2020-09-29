import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import styled from '@emotion/styled'
import { ISCCContext } from '../../contexts/ISCCContext'

export const StyledButton = styled(Button)`
    width: 11.5em;
    margin-bottom: 0.5em;
    background: #d3d6ed;
`

const Menu = () => {
    const { isccs } = useContext(ISCCContext)

    return (
        <Flex direction="column" alignItems="center" marginTop="1em">
            <GenerateISCCButton />
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
