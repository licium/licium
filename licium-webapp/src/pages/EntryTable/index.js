import React, { useContext, useEffect, useMemo } from 'react'
import { ISCCContext } from '../../App'
import { Icon } from '@chakra-ui/core'
import { ISCCButton } from '../../components/InfoButton/ISCCButton'

import { RegistrationId } from '../../components/RegistrationId'
import RegisteredButton from '../../components/InfoButton/RegisteredButton'
import { StyledTable } from './elements'
import EditableCell from '../../components/EditableTableCell'

const Table = () => {
    const { isccs, setIsccs } = useContext(ISCCContext)

    const data = useMemo(() => isccs, [isccs])

    let mutableIsccs

    useEffect(() => {
        mutableIsccs = isccs
    }, [isccs])

    const updateIscc = (id, newIscc) => {
        mutableIsccs[id] = newIscc
        setIsccs([...mutableIsccs])
    }
    const updateIsccField = (id, field, value) => {
        const isccToUpdate = isccs[id]
        const newIscc = {
            ...isccToUpdate,
            [field]: value,
        }
        updateIscc(id, newIscc)
    }

    const cells = () =>
        data.map((iscc, id) => (
            <tr key={id}>
                <td className="centered">
                    <Icon name="star" />
                </td>
                <td>{iscc.title}</td>

                <EditableCell
                    value={iscc.extra}
                    onUpdate={(val) => updateIsccField(id, 'extra', val)}
                />
                <td>-</td>
                <td>{new Date(iscc.date).toISOString().replace('T', ' ')}</td>
                <td className="centered">
                    <ISCCButton iscc={iscc} />
                </td>
                <td className="centered">
                    <RegisteredButton
                        id={id}
                        iscc={iscc}
                        updateIscc={updateIscc}
                    />
                </td>
                <td className="centered">
                    <RegistrationId iscc={iscc} />
                </td>
            </tr>
        ))

    return (
        <StyledTable>
            <table>
                <thead>
                    <tr>
                        <th className="centered">Star</th>
                        <th>Filename</th>
                        <th>Embedded Title</th>
                        <th>Tag</th>
                        <th>Date</th>
                        <th className="centered">ISCC</th>
                        <th className="centered">Registration</th>
                        <th className="centered">Registration ID</th>
                    </tr>
                </thead>
                <tbody>{cells()}</tbody>
            </table>
        </StyledTable>
    )
}

export default Table
