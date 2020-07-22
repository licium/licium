import React from 'react'
import ActionButton from './ActionButton'

export default {
  title: 'ActionButton',
  component: ActionButton,
}

export const Enabled = () => <ActionButton />
export const Disabled = () => <ActionButton disabled />
