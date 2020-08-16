import React from 'react'
import Assets from './Assets'
import { StoryFn } from '@storybook/addons'
import { MemoryRouter } from 'react-router-dom'

const withRouter = (storyFn: StoryFn<any>) => (
  <MemoryRouter>{storyFn()}</MemoryRouter>
)

export default {
  title: 'Assets',
  component: <Assets onAssetsSelected={() => {}} />,
  decorators: [withRouter],
}

export const Default = () => {
  return <Assets onAssetsSelected={() => {}} />
}
