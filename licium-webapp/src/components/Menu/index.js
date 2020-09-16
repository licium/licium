import React, { useContext } from 'react'
import { Button, Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import { ISCCContext } from '../../App'
import Link from '@chakra-ui/core/dist/Link'
import { Link as ReachLink } from 'react-router-dom'

const Menu = () => {
    const { isccs, selectedEntries } = useContext(ISCCContext)
    return (
        <Flex direction="column" alignItems="center">
            <GenerateISCCButton />
            <Link as={ReachLink} to="/registration">
                <Button isDisabled={selectedEntries.length === 0}>
                    Register selected ISCCs
                </Button>
            </Link>
            <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                    JSON.stringify(isccs)
                )}`}
                download="filename.json"
            >
                {`Download Json`}
            </a>
        </Flex>
    )
}

export default Menu
