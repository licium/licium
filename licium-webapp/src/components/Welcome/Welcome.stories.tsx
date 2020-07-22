import React from 'react'
import Welcome from './Welcome'
import { StoryFn } from '@storybook/addons'
import { MemoryRouter } from 'react-router-dom'

const withRouter = (storyFn: StoryFn<any>) => {
  return <MemoryRouter>{storyFn()}</MemoryRouter>
}

export default {
  title: 'Welcome Page',
  component: Welcome,
  decorators: [withRouter],
}

export const Default = () => <Welcome />
