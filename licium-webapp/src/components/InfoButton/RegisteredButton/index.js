import React from 'react'
import { IconButton, Link } from '@chakra-ui/core'
import ISCCRegistry from '../../../assets/contracts/ISCCRegistry.json'
import { FaUpload } from 'react-icons/all'

export const RegisteredButton = ({ iscc, isLoading, onIsccSent }) => {
    const web3 = window.web3
    const contract = new web3.eth.Contract(
        ISCCRegistry.abi,
        ISCCRegistry.networks['8995'].address
    )

    const registerISCC = () => {
        const iscc_hex = web3.utils.hexToBytes(`0x${iscc.iscc_raw}`)
        const tophash_hex = web3.utils.hexToBytes(`0x${iscc.tophash}`)

        const contractMethod = contract.methods.declare(iscc_hex, tophash_hex)

        onIsccSent(
            contractMethod.send({ from: web3.givenProvider.selectedAddress })
        )
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
                    icon={FaUpload}
                    size="sm"
                    variantColor="yellow"
                    aria-label="Not registered"
                />
            )}
        </>
    )
}
