import React from 'react'
import PageTitle from './PageTitle'

export default {
    title: 'PageTitle',
    component: PageTitle,
    excludeStories: /.*Data$/,
}

export const pageTitleData = {
    title: 'This is a cool title',
    description: 'Here is some more info about this page.',
}

export const Default = () => <PageTitle {...pageTitleData} />
