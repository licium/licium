import React from 'react'
import { Provider } from 'react-redux'


export default ProviderWrapper = ({ childen: children, store }) => (
    <Provider store={store}>
        {children}
    </Provider>
)

