import PageTitle from './PageTitle'
import React from 'react'
import { createOvermind } from 'overmind'
import { config } from '../../overmind'
import { Provider } from 'overmind-react'

const overmind = createOvermind(config)

export default {
    title: 'Components/Pagetitle',
    component: PageTitle,
    decorators: [
        (Story) => (
            <Provider value={overmind}>
                <Story />
            </Provider>
        ),
    ],
}

export const Default = () => <PageTitle title="Default Page" />
