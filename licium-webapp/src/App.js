import React, { useEffect } from 'react'
import './App.css'
import { useActions } from './overmind'
import AppScaffold from './pages/AppScaffold'

export const API_PATH = process.env.NODE_ENV === 'production' ? '/api' : '/iscc'

function App() {
    const actions = useActions()

    useEffect(() => {
        actions.isccs.initialize()
        actions.blockchain.initialize()
    }, [actions])

    return <AppScaffold />
}

export default App
