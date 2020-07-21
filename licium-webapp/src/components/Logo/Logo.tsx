import React from 'react'
import logo from './certificate-white-black.png'
import './Logo.css'

type Size = 'sm' | 'm' | 'l'

export function Logo(props: { size?: Size }) {
  return <img src={logo} alt="Application Logo" className={props.size} />
}
