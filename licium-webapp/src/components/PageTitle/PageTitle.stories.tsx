import React from 'react'
import PageTitle, { PageTitleProps } from './PageTitle'

export default {
  title: 'PageTitle',
  component: PageTitle,
  excludeStories: /.*Data$/,
}

export const pageTitleData: PageTitleProps = {
  title: 'This is a cool title',
  description: 'Here is some more info about this page.',
}

export const Default = () => <PageTitle {...pageTitleData} />
