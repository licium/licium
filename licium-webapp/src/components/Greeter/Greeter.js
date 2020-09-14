import React, { useEffect, useState } from 'react'

// @ts-ignore
export default function Greeter({ drizzle, drizzleState }) {
    const [greetingKey, setGreeting] = useState()

    useEffect(() => {
        const greeter = drizzle.contracts?.Greeter
        let cacheKey = greeter.methods['greeting'].cacheCall()
        console.log(cacheKey)
        setGreeting(cacheKey)
    }, [drizzle])

    console.log(drizzleState)
    const { Greeter } = drizzleState.contracts
    const greeting = Greeter.greeting[greetingKey]

    return <div className="section">{greeting?.value}</div>
}
