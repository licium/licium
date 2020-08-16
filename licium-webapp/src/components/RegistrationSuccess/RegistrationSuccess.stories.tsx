import React from 'react'
import RegistrationSuccess from './RegistrationSuccess'
import { StoryFn } from '@storybook/addons'
import { MemoryRouter } from 'react-router-dom'

const withRouter = (storyFn: StoryFn<any>) => (
  <MemoryRouter>{storyFn()}</MemoryRouter>
)

export default {
  title: 'Registration success',
  component: RegistrationSuccess,
  decorators: [withRouter],
}

export const Default = () => <RegistrationSuccess />
