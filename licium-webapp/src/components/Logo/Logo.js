import React from 'react'
import { ReactComponent as LogoSVG } from './Logo.svg'
import './Logo.scss'

export function Logo({ size }) {
    return <LogoSVG className={size} />
}
