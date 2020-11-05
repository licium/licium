import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Image,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Text,
} from '@chakra-ui/core'
import MagicLogo from './magic-logo.svg'
import MetamaskLogo from './metamask-logo.svg'
import styled from '@emotion/styled'

type ProviderIconProps = {
    name: string
    icon: string
    isSelected: boolean
    onSelected: (name: string) => void
}

const ProviderIcon = ({
    name,
    icon,
    isSelected,
    onSelected,
}: ProviderIconProps) => {
    const StyledFlex = styled(Flex)`
        border: 0.2em black;
        border-radius: 1em;
        border-style: ${isSelected ? 'solid' : 'none'};
    `

    return (
        <StyledFlex
            direction="column"
            alignItems="center"
            m="auto 1.5em"
            onClick={() => onSelected(name)}
        >
            <Image src={icon} alt={`${name} Logo`} size="128px" />
            <Text>{name}</Text>
        </StyledFlex>
    )
}

type ChooseBlockchainModalProps = {
    isOpen: boolean
    onClose: (selectedName: string) => void
}

const ChooseBlockchainModal = ({
    isOpen,
    onClose,
}: ChooseBlockchainModalProps) => {
    const [selected, setSelected] = React.useState<string>('Magic')

    return (
        <Modal isOpen={isOpen} isCentered>
            <ModalContent>
                <ModalHeader textAlign="center">
                    <Heading>Wallet access needed</Heading>
                </ModalHeader>
                <Flex direction="column" alignItems="center">
                    <Text>Please choose your wallet provider</Text>
                    <Flex direction="row" pt="1em">
                        <ProviderIcon
                            isSelected={selected === 'Magic'}
                            icon={MagicLogo}
                            name="Magic"
                            onSelected={(name) => setSelected(name)}
                        />
                        <ProviderIcon
                            isSelected={selected === 'Metamask'}
                            icon={MetamaskLogo}
                            name="Metamask"
                            onSelected={(name) => setSelected(name)}
                        />
                    </Flex>
                </Flex>
                <ModalFooter>
                    <Button
                        variantColor="blue"
                        mr={3}
                        onClick={() => onClose(selected)}
                    >
                        OK
                    </Button>
                    <Button>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ChooseBlockchainModal
