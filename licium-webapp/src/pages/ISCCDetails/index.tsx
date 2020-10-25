import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from '../../overmind'
import { Box } from '@chakra-ui/core'
import { TransactionReceipt } from 'web3-core'

const ISCCDetails = () => {
    const { id } = useParams<{ id: string }>()
    const state = useState()
    const iscc: ISCC | undefined = state.isccs.isccList.find(
        (item) => item.id === id
    )
    const [receipt, setReceipt] = React.useState<TransactionReceipt>()

    React.useEffect(() => {
        const loadTransaction = async () => {
            if (state.blockchain.web3 && iscc) {
                const receipt = await state.blockchain.web3.eth.getTransactionReceipt(
                    iscc.transactionHash
                )
                setReceipt(receipt)
            }
        }
        loadTransaction()
    }, [iscc, state.blockchain.web3])

    return (
        <Box>
            {!iscc ? (
                `Sorry, there's no ISCC with the id ${id}.`
            ) : (
                <Box>
                    <pre>{JSON.stringify(iscc, undefined, 2)}</pre>
                    <pre>{JSON.stringify(receipt, undefined, 2)}</pre>
                </Box>
            )}
        </Box>
    )
}

export default ISCCDetails
