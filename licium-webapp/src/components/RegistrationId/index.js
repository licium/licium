import React, { useContext, useEffect, useState } from 'react'
import { IconButton, useToast } from '@chakra-ui/core'
import Link from '@chakra-ui/core/dist/Link'
import { ISCCContext } from '../../contexts/ISCCContext'
import { BlockchainContext } from '../../contexts/BlockchainContext'

export const RegistrationId = ({ iscc }) => {
    const isSuccessfullyRegistered = () => iscc.registrationId
    const isRegisteredOnBlockchain = () => iscc.transactionLink
    const { updateIscc } = useContext(ISCCContext)
    const { provider } = useContext(BlockchainContext)
    const [isRegistrationRunning, setRegistrationRunning] = useState(false)

    const toast = useToast()

    const showError = (msg) => {
        console.error(msg)
        toast({
            title: 'An error occurred.',
            description: msg,
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right',
        })
    }

    const registerId = async () => {
        setRegistrationRunning(true)
        try {
            const shortCodeLink = `https://iscc.in/lookup/${iscc.iscc}/${provider.walletAddress}`
            const response = await fetch(shortCodeLink)

            if (response.status === 200) {
                const shortcode = await response.json()
                const registrationId = shortcode.iscc_id
                updateIscc({
                    ...iscc,
                    registrationId,
                })
            } else {
                showError('Fetching data from Metaregistry failed')
            }
        } catch (e) {
            showError(e.message)
        } finally {
            setRegistrationRunning(false)
        }
    }

    useEffect(() => {
        if (iscc.transactionLink && !iscc.registrationId) {
            registerId()
        }
    }, [iscc.transactionLink])

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
