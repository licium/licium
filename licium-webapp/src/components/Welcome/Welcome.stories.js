import React from 'react'
import Welcome from './Welcome'
import { MemoryRouter } from 'react-router-dom'
import 'bulma/css/bulma.css'

const withRouter = (storyFn) => {
    return <MemoryRouter>{storyFn()}</MemoryRouter>
}

export default {
    title: 'Welcome Page',
    component: Welcome,
    decorators: [withRouter],
}

export const Default = () => <Welcome />
