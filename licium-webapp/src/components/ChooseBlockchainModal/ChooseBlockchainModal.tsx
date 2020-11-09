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

type EmailRequiredInputProps = {
    onChange: (value: string) => void
}

const EmailRequiredInput = ({ onChange }: EmailRequiredInputProps) => {
    return (
        <FormControl>
            <FormLabel htmlFor="email">
                Please enter you E-Mail address.
            </FormLabel>
            <Input
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

type ChooseBlockchainModalProps = {
    isOpen: boolean
    onClose: (type?: BlockchainProviderType, email?: string) => void
}

const ChooseBlockchainModal = ({
    isOpen,
    onClose,
}: ChooseBlockchainModalProps) => {
    const [selected, setSelected] = React.useState<BlockchainProviderType>(
        'None'
    )
    const [email, setEmail] = React.useState<string>('')

    const submit = (e: FormEvent) => {
        e.preventDefault()
        onClose(selected, email)
    }

    return (
        <Modal isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">
                    <Heading>Please choose your wallet provider</Heading>
                </ModalHeader>
                <form onSubmit={(e) => submit(e)}>
                    <Flex direction="column" alignItems="center">
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
                        {selected === 'Magic' ? (
                            <EmailRequiredInput
                                onChange={(value) => setEmail(value)}
                            />
                        ) : (
                            ''
                        )}
                    </Flex>

                    <ModalFooter>
                        <Button
                            type="submit"
                            isDisabled={selected === 'None'}
                            variantColor="blue"
                            mr={3}
                        >
                            OK
                        </Button>
                        <Button onClick={() => onClose()}>Cancel</Button>
                    </ModalFooter>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default ChooseBlockchainModal
