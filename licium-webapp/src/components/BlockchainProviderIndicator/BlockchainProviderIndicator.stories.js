import React from 'react'
import BlockchainProviderIndicator from './index'

export default {
    title: 'Components/BlockchainProviderIndicator',
    component: BlockchainProviderIndicator,
}

export const None = () => (
    <BlockchainProviderIndicator
        onClick={() => console.log('clicked')}
        providerType={'None'}
    />
)
export const Magic = () => (
    <BlockchainProviderIndicator
        onClick={() => console.log('clicked')}
        providerType={'Magic'}
    />
)
export const Metamask = () => (
    <BlockchainProviderIndicator
        onClick={() => console.log('clicked')}
        providerType={'Metamask'}
    />
)
