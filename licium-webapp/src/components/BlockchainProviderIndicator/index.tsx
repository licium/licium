import React from 'react'
import { Box, Image, Link } from '@chakra-ui/core'
import MetamaskLogo from './metamask-logo.svg'
import MagicLogo from './magic-logo.svg'

type BlockchainProviderIndicatorProps = {
    providerType: BlockchainProviderType
    onClick: () => void
}

const logosPerType: { [key in BlockchainProviderType]: string } = {
    Magic: MagicLogo,
    Metamask: MetamaskLogo,
    None: '',
}

const BlockchainProviderIndicator = ({
    providerType,
    onClick,
}: BlockchainProviderIndicatorProps) => {
    const logo = logosPerType[providerType]

    return (
        <Box>
            {providerType === 'None' ? (
                <Link onClick={() => onClick()}>
                    Choose Blockchain Provider
                </Link>
            ) : (
                <Image src={logo} size="32px" onClick={() => onClick()} />
            )}
        </Box>
    )
}

export default BlockchainProviderIndicator
