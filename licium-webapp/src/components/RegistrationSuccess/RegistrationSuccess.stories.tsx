import React from 'react'
import RegistrationSuccess from './RegistrationSuccess'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { StoryFn } from '@storybook/addons'
import { MemoryRouter } from 'react-router-dom'

const withStore = (storyFn: StoryFn<any>) => (
  <Provider store={store}>{storyFn()}</Provider>
)
const withRouter = (storyFn: StoryFn<any>) => (
  <MemoryRouter>{storyFn()}</MemoryRouter>
)

export default {
  title: 'Registration success',
  component: RegistrationSuccess,
  decorators: [withStore, withRouter],
}

export const Default = () => <RegistrationSuccess />
