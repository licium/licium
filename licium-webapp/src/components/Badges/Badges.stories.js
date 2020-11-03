import React from 'react'
import Badges from './Badges'

export default {
    title: 'Components/Badges',
    component: Badges,
}

export const OneBadge = () => <Badges badges={['Awesome']} />

export const ManyBadges = () => <Badges badges={['Awesome', 'Cool', 'New']} />
