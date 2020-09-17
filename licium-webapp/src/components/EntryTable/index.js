import React, { useContext, useMemo, useState } from 'react'
import { ISCCContext } from '../../App'
import styled from '@emotion/styled'
import {
    Checkbox,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/core'
import { ISCCButton } from '../ISCCButton'
import { RegisteredButton } from '../RegisteredButton'

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
                        size="sm"
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
                size="sm"
                aria-label="edit"
                icon="edit"
                onClick={() => setEditable(true)}
            />
            {value}
        </td>
    )
}

export const StyledTable = styled.div`
    margin: 1em 2em 0 0.5em;
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
                <td onClick={() => toggleSelect(iscc)} className="centered">
                    <Checkbox
                        isChecked={selectedEntries.includes(iscc)}
                        onChange={() => toggleSelect(iscc)}
                    />
                </td>
                <td className="centered">
                    <Icon name="star" />
                </td>
                <td>{iscc.title}</td>
                <EditableCell
                    value={iscc.extra}
                    onSubmit={(value) => updateIscc(id, 'extra', value)}
                />
                <td>-</td>
                <td>{iscc.date}</td>
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
