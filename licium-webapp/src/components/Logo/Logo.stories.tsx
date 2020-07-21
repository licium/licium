import React from 'react'
import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
}

export const originalSize = () => <Logo></Logo>
export const small = () => <Logo size="sm"></Logo>
export const medium = () => <Logo size="m"></Logo>
export const large = () => <Logo size="l"></Logo>
