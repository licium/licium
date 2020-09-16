import React from 'react'
import { Logo } from '../Logo/Logo'
import './AppHeader.scss'
import { Link as ReachLink } from 'react-router-dom'
import Link from '@chakra-ui/core/dist/Link'
import { Flex } from '@chakra-ui/core'

export default function AppHeader() {
    return (
        <Flex justifyContent="center">
            <Link as={ReachLink} to="/">
                <Logo size={'sm'} />
            </Link>
        </Flex>
    )
}
