import React from 'react'
import { ReactComponent as LogoSVG } from './Logo.svg'
import './Logo.css'

type Size = 'sm' | 'm' | 'l'

export function Logo(props: { size?: Size }) {
  return <LogoSVG height="auto" className={props.size} />
}
