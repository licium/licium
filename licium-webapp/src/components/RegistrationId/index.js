import React, { useEffect } from 'react'
import { IconButton } from '@chakra-ui/core'
import Link from '@chakra-ui/core/dist/Link'
import { useActions } from '../../overmind'

export const RegistrationId = ({ iscc }) => {
    const isSuccessfullyRegistered = () => iscc.registrationId
    const isRegisteredOnBlockchain = () => iscc.transactionLink
    const [isRegistrationRunning, setRegistrationRunning] = React.useState(
        false
    )
    const actions = useActions()

    const registerId = async () => {
        setRegistrationRunning(true)
        await actions.isccs.writeTransactionToMetaRegistry(iscc)
        setRegistrationRunning(false)
    }

    useEffect(() => {
        const waitForReg = async () => {
            setRegistrationRunning(true)
            await actions.isccs.writeTransactionToMetaRegistry(iscc)
            setRegistrationRunning(false)
        }
        if (iscc.transactionLink && !iscc.registrationId) {
            waitForReg()
        }
    }, [actions.isccs, iscc])

    const renderLink = () => (
        <Link
            href={`https://iscc.in/browse/core/isccid/${iscc.registrationId}/change/`}
            target="_blank"
        >
            {iscc.registrationId}
        </Link>
    )

    return (
        <>
            {isRegisteredOnBlockchain() ? (
                isSuccessfullyRegistered() ? (
                    renderLink()
                ) : (
                    <IconButton
                        size="sm"
                        icon="repeat"
                        aria-label="Retry registration"
                        isDisabled={isRegistrationRunning}
                        onClick={() => registerId()}
                    />
                )
            ) : (
                <IconButton
                    disabled
                    size="sm"
                    icon="close"
                    aria-label="disabled"
                />
            )}
        </>
    )
}
