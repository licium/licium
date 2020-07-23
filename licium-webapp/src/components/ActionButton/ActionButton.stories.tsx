import React from 'react'
import ActionButton from './ActionButton'
import { StoryFn } from '@storybook/addons'
import { MemoryRouter } from 'react-router-dom'

const routeDecorator = (storyFn: StoryFn<any>) => {
  return <MemoryRouter>{storyFn()}</MemoryRouter>
}

export default {
  title: 'ActionButton',
  component: ActionButton,
  decorators: [routeDecorator],
}

export const Enabled = () => <ActionButton />
export const Disabled = () => <ActionButton disabled />
