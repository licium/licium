import React, { useEffect, useState } from 'react'
// @ts-ignore
import { newContextComponents } from '@drizzle/react-components'
const { ContractData, ContractForm } = newContextComponents

// @ts-ignore
export function Drizzle({ drizzle, drizzleState }) {
  /* const [greetingKey, setGreeting] = useState<any>()

  useEffect(() => {
    const greeter = drizzle.contracts.Greeter
    let cacheKey = greeter.methods['greeting'].cacheCall()
    console.log(cacheKey)
    setGreeting(cacheKey)
  })

  console.log(drizzleState)
  const { Greeter } = drizzleState.contracts
  const greeting = Greeter.greeting[greetingKey]
*/
  return (
    <div className="section">
      <h2>Greeter</h2>
      <p>Data from greeter</p>
      <p>
        <strong>Stored Value: </strong>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="Greeter"
          method="greeting"
        />
      </p>
      <ContractForm drizzle={drizzle} contract="Greeter" method="setGreeting" />
    </div>
  )
}
