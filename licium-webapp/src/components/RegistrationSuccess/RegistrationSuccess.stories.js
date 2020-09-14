import React from 'react'
import RegistrationSuccess from './RegistrationSuccess'
import { MemoryRouter } from 'react-router-dom'

const withRouter = (storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>

export default {
    title: 'Registration success',
    component: RegistrationSuccess,
    decorators: [withRouter],
}

export const Default = () => <RegistrationSuccess />
