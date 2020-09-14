import React from 'react'
import { Logo } from '../Logo/Logo'
import './AppHeader.scss'

export default function AppHeader() {
    return (
        <div className="app-header">
            <a href={'/'}>
                <Logo size={'sm'} />
            </a>
            licium
        </div>
    )
}
