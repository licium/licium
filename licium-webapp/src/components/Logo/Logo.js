import React from 'react'
import { ReactComponent as LogoSVG } from './Logo.svg'
import './Logo.scss'

export function Logo(props) {
    return <LogoSVG className={props.size} />
}
