import ISCCDetails from './index'
import React from 'react'
import { config } from '../../overmind'
import { Provider } from 'overmind-react'
import { createOvermindMock } from 'overmind'
import { MemoryRouter as Router, Route } from 'react-router-dom'

const overmind = createOvermindMock(config, {
    isccs: {
        storeIsccsToLocalStorage: () => {},
    },
})
overmind.actions.isccs.addIscc({ id: 'fooBar' })

export default {
    title: 'Pages/ISCCDetails',
    component: ISCCDetails,
    decorators: [
        (Story) => (
            <Provider value={overmind}>
                <Router initialEntries={['/fooBar']} initialIndex={0}>
                    <Route path="/:id">
                        <Story />
                    </Route>
                </Router>
            </Provider>
        ),
    ],
}

export const Default = () => <ISCCDetails />
