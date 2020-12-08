import React from 'react'
import { IconButton, Link } from '@chakra-ui/core'
import { FaUpload } from 'react-icons/all'
import { useActions, useState } from '../../../overmind'

type RegisteredButtonProps = {
    iscc: ISCC
}

const RegisteredButton = ({ iscc }: RegisteredButtonProps) => {
    const actions = useActions()

    const state = useState()
    const [isLoading, setLoading] = React.useState(false)

    const registerISCC = async () => {
        setLoading(true)
        try {
            if (!state.blockchain.walletProvider) {
                await actions.blockchain.openChooseBlockchainProviderTypeModal()
            }
            await actions.blockchain.writeISCCToContract(iscc)
        } finally {
            setLoading(false)
        }
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
export default RegisteredButton
