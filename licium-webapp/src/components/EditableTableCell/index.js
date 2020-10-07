import React, { useState } from 'react'
import {
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Stack,
} from '@chakra-ui/core'
import Box from '@chakra-ui/core/dist/Box'
import FocusLock from 'react-focus-lock'
import { useActions } from '../../overmind'

const TextInput = React.forwardRef((props, ref) => {
    return (
        <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} />
        </FormControl>
    )
})

const TitleForm = ({ firstFieldRef, value, onCancel, onSave }) => {
    const [isSaveDisabled, setIsSaveDisabled] = useState(true)
    const [title, setTitle] = useState(value)

    const onValueChange = (newVal) => {
        setTitle(newVal)
        setIsSaveDisabled(false)
    }

    return (
        <Stack spacing={4}>
            <TextInput
                label="Edit title"
                id="new-title"
                ref={firstFieldRef}
                defaultValue={title}
                onChange={(e) => onValueChange(e.target.value)}
            />
            <ButtonGroup>
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button
                    isDisabled={isSaveDisabled}
                    onClick={() => onSave(title)}
                >
                    Save
                </Button>
            </ButtonGroup>
        </Stack>
    )
}

const EditableCell = ({ iscc }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const firstFieldRef = React.useRef(null)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const actions = useActions()

    return (
        <Flex minW="25em" justifyContent="space-between">
            <Box mr={3}>{iscc.extra}</Box>

            <Popover
                isOpen={isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={open}
                onClose={close}
                placement="bottom"
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <IconButton size="sm" icon="edit" aria-label="edit" />
                </PopoverTrigger>
                <PopoverContent zIndex={4} p={5}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow bg="white" />
                        <PopoverCloseButton />
                        <TitleForm
                            firstFieldRef={firstFieldRef}
                            value={iscc.extra}
                            onCancel={close}
                            onSave={(val) => {
                                const updatedIscc = {
                                    ...iscc,
                                    extra: val,
                                }
                                close()
                                actions.isccs.updateIscc(updatedIscc)
                            }}
                        />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </Flex>
    )
}

export default EditableCell
