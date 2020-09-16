import React, { useContext, useMemo, useState } from 'react'
import { ISCCContext } from '../../App'
import { FaQrcode, FaStar } from 'react-icons/all'
import styled from '@emotion/styled'
import { IconButton, Input, InputGroup, InputRightAddon } from '@chakra-ui/core'

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
    const { isccs, setIsccs } = useContext(ISCCContext)

    const data = useMemo(() => isccs, [isccs])

    const Styled = styled.div`
        margin: 1em;
        table {
            width: 100%;
            td {
                border: 1px solid;
                padding: 1em;
            }
        }
    `

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
                <td>
                    <input type="checkbox" />
                </td>
                <td>
                    <FaStar />
                </td>
                <td>{iscc.date}</td>
                <td>-</td>
                <EditableCell
                    value={iscc.extra}
                    onSubmit={(value) => updateIscc(id, 'extra', value)}
                />
                <td>{iscc.title}</td>
                <td>
                    <FaQrcode />
                </td>
            </tr>
        ))

    return (
        <Styled>
            <table>
                <thead>
                    <tr>
                        <td>Select</td>
                        <td>Star</td>
                        <td>Date</td>
                        <td>#Tag</td>
                        <td>Embedded Title</td>
                        <td>Filename</td>
                        <td>ISCC</td>
                    </tr>
                </thead>
                <tbody>{cells()}</tbody>
            </table>
        </Styled>
    )
}

export default Table
