import React from 'react'
import { useLocation } from 'react-router-dom'
import { Heading } from '@chakra-ui/core'

const titles = {
    '/': 'ISCC Entries',
    '/registration': 'Register ISCCs',
}

export default function PageTitle() {
    const location = useLocation()

    const title = titles[location.pathname]

    return <Heading size="lg">{title}</Heading>
}
