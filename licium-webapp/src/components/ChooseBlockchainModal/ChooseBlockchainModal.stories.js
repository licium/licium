import React from 'react'
import ChooseBlockchainModal from './ChooseBlockchainModal'

export default {
    title: 'Components/ChooseBlockchainModal',
    component: ChooseBlockchainModal,
}

export const Open = () => (
    <ChooseBlockchainModal
        isOpen={true}
        onClose={(name) => console.log(name)}
    />
)

export const Closed = () => (
    <ChooseBlockchainModal
        isOpen={false}
        onClose={(name) => console.log(name)}
    />
)
