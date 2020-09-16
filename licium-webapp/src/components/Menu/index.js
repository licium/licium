import React, { useContext } from 'react'
import { Flex } from '@chakra-ui/core'
import GenerateISCCButton from '../GenerateISCCButton'
import { ISCCContext } from '../../App'

const Menu = () => {
    const { isccs } = useContext(ISCCContext)
    return (
        <Flex direction="column">
            <GenerateISCCButton />
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
