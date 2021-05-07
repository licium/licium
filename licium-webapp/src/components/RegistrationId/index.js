import React, { useCallback, useEffect } from 'react'
import { IconButton, Link } from '@chakra-ui/react'
import { useActions } from '../../overmind'

export const RegistrationId = ({ iscc }) => {
    const isSuccessfullyRegistered = () => iscc.registrationId
    const isRegisteredOnBlockchain = () => iscc.transactionLink
    const [isRegistrationRunning, setRegistrationRunning] = React.useState(
        false
    )
    const actions = useActions()

    const registerId = useCallback(async () => {
        setRegistrationRunning(true)
        await actions.isccs.writeTransactionToMetaRegistry(iscc)
        setRegistrationRunning(false)
    }, [actions.isccs, iscc])

    useEffect(() => {
        if (iscc.transactionLink && !iscc.registrationId) {
            registerId()
        }
    }, [iscc.transactionLink, iscc.registrationId, registerId])

    const renderLink = () => (
        <Link href={`https://iscc.in/${iscc.registrationId}`} target="_blank">
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
