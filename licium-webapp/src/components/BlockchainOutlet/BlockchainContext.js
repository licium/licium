import React from 'react'
// @ts-ignore
import { DrizzleContext } from '@drizzle/react-plugin'
import Greeter from '../Greeter/Greeter'

export default function BlockchainContext() {
    return (
        <DrizzleContext.Consumer>
            {(drizzleContext) => {
                const { drizzle, drizzleState, initialized } = drizzleContext
                console.log(drizzleContext)

                if (!initialized) {
                    return 'Loading...'
                }

                return <Greeter drizzle={drizzle} drizzleState={drizzleState} />
            }}
        </DrizzleContext.Consumer>
    )
}
