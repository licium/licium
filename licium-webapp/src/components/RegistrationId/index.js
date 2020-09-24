import React from 'react'
import { IconButton } from '@chakra-ui/core'
import Link from '@chakra-ui/core/dist/Link'

export const RegistrationId = ({ iscc }) => (
    <>
        {iscc.registrationId ? (
            <Link
                href={`https://iscc.in/browse/core/isccid/${iscc.registrationId}/change/`}
                target="_blank"
            >
                {iscc.registrationId}
            </Link>
        ) : (
            <IconButton disabled size="sm" icon="close" aria-label="disabled" />
        )}
    </>
)
