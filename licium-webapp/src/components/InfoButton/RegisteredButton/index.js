import React, { useState } from 'react'
import { IconButton, Link, useToast } from '@chakra-ui/core'
import ISCCRegistry from '../../../assets/contracts/ISCCRegistry.json'

export const RegisteredButton = ({ iscc, onIsccWritten }) => {
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    const web3 = window.web3
    const contract = new web3.eth.Contract(
        ISCCRegistry.abi,
        ISCCRegistry.networks['8995'].address
    )

    const registerISCC = () => {
        const iscc_hex = web3.utils.hexToBytes(`0x${iscc.iscc_raw}`)
        const tophash_hex = web3.utils.hexToBytes(`0x${iscc.tophash}`)

        contract.methods
            .declare(iscc_hex, tophash_hex)
            .send({ from: web3.givenProvider.selectedAddress })
            .on('sent', () => setIsLoading(true))
            .on('receipt', (hash) => {
                const transactionLink = `https://blockexplorer.bloxberg.org/tx/${hash.transactionHash}`
                const registeredIscc = {
                    ...iscc,
                    transactionLink,
                }
                console.log(hash)
                onIsccWritten(registeredIscc)
            })
            .on('error', (err) => {
                console.error(err)
                toast({
                    title: 'An error occurred.',
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right',
                })
                setIsLoading(false)
            })
    }

    return (
        <>
            {iscc.transactionLink ? (
                <Link href={iscc.transactionLink} target="_blank">
                    <IconButton
                        size="sm"
                        variantColor="green"
                        title="Registered on blockchain"
                        icon="check"
                        aria-label="RegistrationInfo"
                    />
                </Link>
            ) : (
                <IconButton
                    onClick={() => registerISCC()}
                    isLoading={isLoading}
                    icon="close"
                    size="sm"
                    variantColor="red"
                    aria-label="Not registered"
                />
            )}
        </>
    )
}
