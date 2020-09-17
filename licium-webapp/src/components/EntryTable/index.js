import React, {useContext, useMemo, useState} from 'react'
import {ISCCContext} from '../../App'
import {FaQrcode} from 'react-icons/all'
import styled from '@emotion/styled'
import {
    Checkbox,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
    List,
    ListItem,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from '@chakra-ui/core'
import {splitEvery} from 'ramda'

const EditableCell = (props) => {
    const [isEditable, setEditable] = useState(false)
    const [value, setValue] = useState(props.value)

    const finishEdit = () => {
        setEditable(false)
        props.onSubmit(value)
    }

    return isEditable ? (
        <td>
            <InputGroup>
                <Input
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
                <InputRightAddon>
                    <IconButton
                        aria-label="confirm"
                        icon="check"
                        onClick={() => finishEdit()}
                    />
                </InputRightAddon>
            </InputGroup>
        </td>
    ) : (
        <td>
            <IconButton
                aria-label="edit"
                icon="edit"
                onClick={() => setEditable(true)}
            />
            {value}
        </td>
    )
}

const Table = () => {
    const {isccs, setIsccs, selectedEntries, setSelectedEntries} = useContext(
        ISCCContext
    )

    const data = useMemo(() => isccs, [isccs])

    const Styled = styled.div`
        margin: 1em;
        table {
            width: 100%;
            td {
                border: 1px solid;
                padding: 1em;
            }
            td.centered {
                text-align: center;
            }
        }
    `

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

    const isccCodeList = (iscc) => {
        const codes = iscc.split('-')
        const codeObject = {
            'Meta-ID': codes[0],
            'Content-ID': codes[1],
            'Data-ID': codes[2],
            'Instance-ID': codes[3],
        }
        return Object.keys(codeObject).map((key, idx) => (
            <ListItem key={idx}>
                <strong>{key}:</strong> {codeObject[key]}
            </ListItem>
        ))
    }

    const breakTophash = (tophash) => splitEvery(32, tophash).join(' ')

    const cells = () =>
        data.map((iscc, id) => (
            <tr key={id}>
                <td onClick={() => toggleSelect(iscc)} className="centered">
                    <Checkbox
                        isChecked={selectedEntries.includes(iscc)}
                        onChange={() => toggleSelect(iscc)}
                    />
                </td>
                <td className="centered">
                    <Icon name="star"/>
                </td>
                <td>{iscc.title}</td>
                <EditableCell
                    value={iscc.extra}
                    onSubmit={(value) => updateIscc(id, 'extra', value)}
                />
                <td>-</td>
                <td>{iscc.date}</td>
                <td className="centered">
                    <Popover>
                        <PopoverTrigger>
                            <IconButton
                                icon={FaQrcode}
                                aria-label="registered"
                            />
                        </PopoverTrigger>
                        <PopoverContent zIndex={4} w="1000px">
                            <PopoverArrow/>
                            <PopoverCloseButton/>
                            <PopoverHeader>Iscc Content</PopoverHeader>
                            <PopoverBody>
                                <List>
                                    {isccCodeList(iscc.iscc)}
                                    <ListItem>
                                        <strong>Tophash:</strong>{' '}
                                        {breakTophash(iscc.tophash)}
                                    </ListItem>
                                </List>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </td>
                <td className="centered">
                    {iscc.registration ? (
                        <Popover>
                            <PopoverTrigger>
                                <IconButton
                                    icon="check"
                                    variantColor="green"
                                    aria-label="registered"
                                />
                            </PopoverTrigger>
                            <PopoverContent zIndex={4}>
                                <PopoverArrow/>
                                <PopoverCloseButton/>
                                <PopoverHeader>Registration Info</PopoverHeader>
                                <PopoverBody>
                                    <List>
                                        {Object.keys(iscc.registration).map(
                                            (key, id) => (
                                                <ListItem key={id}>
                                                    <strong>{key}:</strong>{' '}
                                                    {iscc.registration[key]}
                                                </ListItem>
                                            )
                                        )}
                                    </List>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    ) : (
                        <IconButton
                            isDisabled
                            icon="close"
                            variantColor="red"
                            aria-label="Not registered"
                        />
                    )}
                </td>
            </tr>
        ))

    return (
        <Styled>
            <table>
                <thead>
                <tr>
                    <td className="centered">Select</td>
                    <td className="centered">Star</td>
                    <td>Filename</td>
                    <td>Embedded Title</td>
                    <td>#Tag</td>
                    <td>Date</td>
                    <td className="centered">ISCC</td>
                    <td className="centered">Registered?</td>
                </tr>
                </thead>
                <tbody>{cells()}</tbody>
            </table>
        </Styled>
    )
}

export default Table
