import React from 'react'
import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
}

export const originalSize = () => <Logo />
export const small = () => <Logo size="sm" />
export const medium = () => <Logo size="m" />
export const large = () => <Logo size="l" />
