import React, { ChangeEvent, FormEvent } from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Image,
    Input,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/core'
import MagicLogo from './magic-logo.svg'
import MetamaskLogo from './metamask-logo.svg'
import { useActions, useState } from '../../overmind'

type ProviderIconProps = {
    name: BlockchainProviderType
    icon: string
    isSelected: boolean
    onSelected: (name: BlockchainProviderType) => void
}

const ProviderIcon = ({
    name,
    icon,
    isSelected,
    onSelected,
}: ProviderIconProps) => {
    return (
        <Flex
            border="0.2em black"
            borderRadius="1em"
            borderStyle={isSelected ? 'solid' : 'none'}
            direction="column"
            alignItems="center"
            m="auto 1.5em"
            onClick={() => onSelected(name)}
        >
            <Image src={icon} alt={`${name} Logo`} size="128px" />
            <Text>{name}</Text>
        </Flex>
    )
}

type ProviderSelectorProps = {
    selected: BlockchainProviderType
    setSelected: (name: BlockchainProviderType) => void
    isDisabled: boolean
    setEmail: (value: string) => void
}
const ProviderSelector = ({
    selected,
    setSelected,
    isDisabled,
    setEmail,
}: ProviderSelectorProps) => {
    const onSelect = (name: BlockchainProviderType) => {
        if (!isDisabled) {
            setSelected(name)
        }
    }

    return (
        <Flex
            direction="column"
            alignItems="center"
            opacity={isDisabled ? 0.4 : 1}
        >
            <Flex direction="row" pt="1em">
                <ProviderIcon
                    isSelected={selected === 'Magic'}
                    icon={MagicLogo}
                    name="Magic"
                    onSelected={(name) => onSelect(name)}
                />
                <ProviderIcon
                    isSelected={selected === 'Metamask'}
                    icon={MetamaskLogo}
                    name="Metamask"
                    onSelected={(name) => onSelect(name)}
                />
            </Flex>
            {selected === 'Magic' ? (
                <EmailRequiredInput
                    isDisabled={isDisabled}
                    onChange={(value) => setEmail(value)}
                />
            ) : isDisabled ? (
                <Text as="i">
                    Please open the metamask plugin to log in with metamask.
                </Text>
            ) : (
                ''
            )}
        </Flex>
    )
}

type EmailRequiredInputProps = {
    onChange: (value: string) => void
    isDisabled: boolean
}

const EmailRequiredInput = ({
    onChange,
    isDisabled,
}: EmailRequiredInputProps) => {
    return (
        <FormControl>
            <FormLabel htmlFor="email">
                Please enter you E-Mail address.
            </FormLabel>
            <Input
                isDisabled={isDisabled}
                isRequired={true}
                type="email"
                id="email"
                placeholder="E-Mail"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    onChange(e.target.value)
                }
            />
            <FormHelperText id="email-helper-text">
                For Magic we need a valid E-Mail address.
            </FormHelperText>
        </FormControl>
    )
}

const ChooseBlockchainModal = () => {
    const state = useState()
    const actions = useActions()

    const [selected, setSelected] = React.useState<BlockchainProviderType>(
        'None'
    )

    const [email, setEmail] = React.useState<string>('')

    const submit = (e: FormEvent) => {
        e.preventDefault()
        actions.blockchain.setBlockchainProviderType({
            type: selected,
            email,
        })
    }

    return (
        <Modal
            isOpen={state.blockchain.isChooseBlockchainProviderModalOpen}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">
                    <Heading>Please choose your wallet provider</Heading>
                </ModalHeader>
                <form onSubmit={(e) => submit(e)}>
                    <ProviderSelector
                        selected={selected}
                        setSelected={setSelected}
                        isDisabled={state.blockchain.activatingProvider}
                        setEmail={setEmail}
                    />
                    <ModalFooter>
                        <Button
                            type="submit"
                            isLoading={state.blockchain.activatingProvider}
                            isDisabled={selected === 'None'}
                            variantColor="blue"
                            mr={3}
                        >
                            OK
                        </Button>
                        <Button
                            onClick={() =>
                                actions.blockchain.closeChooseBlockchainProviderTypeModal()
                            }
                            isDisabled={state.blockchain.activatingProvider}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ChooseBlockchainModal
