import React from 'react'
import { Badge, Stack } from '@chakra-ui/core'

type BadgesProps = {
    badges: string[]
}

const Badges = ({ badges }: BadgesProps) => {
    const badgeList = badges.map((badge, idx) => (
        <Badge key={idx}>{badge}</Badge>
    ))

    return <Stack isInline>{badgeList}</Stack>
}

export default Badges
