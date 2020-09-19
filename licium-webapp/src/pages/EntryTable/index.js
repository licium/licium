import React, { useContext, useMemo, useState } from 'react'
import { ISCCContext } from '../../App'
import styled from '@emotion/styled'
import FocusLock from 'react-focus-lock'
import {
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormLabel,
    Icon,
    IconButton,
    Input,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Stack,
} from '@chakra-ui/core'
import { ISCCButton } from '../ISCCButton'
import { RegisteredButton } from '../RegisteredButton'
import Box from '@chakra-ui/core/dist/Box'

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

const EditCell = ({ value, onUpdate }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const firstFieldRef = React.useRef(null)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    const [text, setText] = useState(value)

    return (
        <td>
            <Box d="inline-block" mr={3}>
                {text}
            </Box>
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
                            value={text}
                            onCancel={close}
                            onSave={(val) => {
                                close()
                                setText(val)
                                onUpdate(val)
                            }}
                        />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </td>
    )
}

export const StyledTable = styled.div`
    margin: 1em 2em 0 0;
    table {
        border-color: #d3d6ed;
        border-width: 5px;
        width: 100%;
        .centered {
            text-align: center;
        }
        th {
            border: 1px solid #d3d6ed;
            padding: 0.5em;
        }
        td {
            border: 1px solid #d3d6ed;
            padding: 0.5em;
        }
    }
`

const Table = () => {
    const { isccs, setIsccs, selectedEntries, setSelectedEntries } = useContext(
        ISCCContext
    )

    const data = useMemo(() => isccs, [isccs])

    const toggleSelect = (iscc) => {
        let newEntries
        if (selectedEntries.includes(iscc)) {
            newEntries = selectedEntries.filter((entry) => entry !== iscc)
        } else {
            newEntries = [...selectedEntries, iscc]
        }
        setSelectedEntries(newEntries)
    }

    const updateIscc = (id, field, value) => {
        const isccToUpdate = isccs[id]
        const newIscc = {
            ...isccToUpdate,
            [field]: value,
        }
        const newIsccs = [
            ...isccs.slice(0, id),
            newIscc,
            ...isccs.slice(id + 1),
        ]
        setIsccs(newIsccs)
    }

    const cells = () =>
        data.map((iscc, id) => (
            <tr key={id}>
                <td className="centered">
                    <Checkbox
                        isChecked={selectedEntries.includes(iscc)}
                        onChange={() => toggleSelect(iscc)}
                    />
                </td>
                <td className="centered">
                    <Icon name="star" />
                </td>
                <td>{iscc.title}</td>

                <EditCell
                    value={iscc.extra}
                    onUpdate={(val) => updateIscc(id, 'extra', val)}
                />
                <td>-</td>
                <td>{new Date(iscc.date).toISOString().replace('T', ' ')}</td>
                <td className="centered">
                    <ISCCButton iscc={iscc} />
                </td>
                <td className="centered">
                    <RegisteredButton iscc={iscc} />
                </td>
            </tr>
        ))

    return (
        <StyledTable>
            <table>
                <thead>
                    <tr>
                        <th className="centered">Select</th>
                        <th className="centered">Star</th>
                        <th>Filename</th>
                        <th>Embedded Title</th>
                        <th>Tag</th>
                        <th>Date</th>
                        <th className="centered">ISCC</th>
                        <th className="centered">Registered</th>
                    </tr>
                </thead>
                <tbody>{cells()}</tbody>
            </table>
        </StyledTable>
    )
}

export default Table
