import React from 'react'
import { ReactComponent as LogoSVG } from './Logo.svg'
import './Logo.scss'

type Size = 'sm' | 'm' | 'l'

export function Logo(props: { size?: Size }) {
  return <LogoSVG className={props.size} />
}