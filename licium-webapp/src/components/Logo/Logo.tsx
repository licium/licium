import React from 'react'
import logo from './Logo.svg'
import './Logo.css'

type Size = 'sm' | 'm' | 'l'

export function Logo(props: { size?: Size }) {
  return <img src={logo} alt="Application Logo" className={props.size} />
}
