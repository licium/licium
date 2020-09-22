import React from 'react'
import ISCCRegistry from '../../assets/contracts/ISCCRegistry.json'
import { Drizzle } from '@drizzle/store'
import { DrizzleContext } from '@drizzle/react-plugin'

export const DrizzleComponent = () => {
    const drizzleOptions = {
        contracts: [ISCCRegistry],
        events: {
            SimpleStorage: ['StorageSet'],
        },
    }

    const drizzle = new Drizzle(drizzleOptions)

    return (
        <DrizzleContext.Provider drizzle={drizzle}>
            <DrizzleContext.Consumer>
                {(drizzleContext) => {
                    const {
                        drizzle,
                        drizzleState,
                        initialized,
                    } = drizzleContext

                    if (!initialized) {
                        return 'Loading...'
                    }

                    return (
                        <pre>
                            {console.log(drizzle)}
                            {console.log(drizzleState)}
                        </pre>
                    )
                }}
            </DrizzleContext.Consumer>
        </DrizzleContext.Provider>
    )
}
