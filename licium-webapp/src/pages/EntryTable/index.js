import React, { useMemo } from 'react'
import { Icon } from '@chakra-ui/core'
import { ISCCButton } from '../../components/InfoButton/ISCCButton'

import { RegistrationId } from '../../components/RegistrationId'
import RegisteredButton from '../../components/InfoButton/RegisteredButton'
import { StyledTable } from './elements'
import EditableCell from '../../components/EditableTableCell'
import Table from '../../components/Table'
import { useState } from '../../overmind'

const EntryTable = ({ onEntriesSelected = () => {} }) => {
    const state = useState()

    const data = useMemo(() => state.isccs.isccList, [state.isccs.isccList])

    const columns = useMemo(
        () => [
            {
                Header: 'Star',
                className: 'centered',
                Cell: () => <Icon name="star" />,
            },
            {
                Header: 'Filename',
                accessor: 'title',
            },
            {
                Header: 'Embedded Title',
                accessor: (row) => row,
                Cell: ({ value }) => <EditableCell iscc={value} />,
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                accessor: (row) => row,
                Header: 'ISCC',
                className: 'centered',
                Cell: ({ value }) => <ISCCButton iscc={value} />,
            },
            {
                Header: 'Registration',
                accessor: (row) => row,
                className: 'centered',
                Cell: ({ value }) => <RegisteredButton iscc={value} />,
            },
            {
                Header: 'Registration ID',
                accessor: (row) => row,
                className: 'centered',
                Cell: ({ value }) => <RegistrationId iscc={value} />,
            },
        ],
        []
    )

    return (
        <StyledTable>
            <Table
                columns={columns}
                data={data}
                onEntriesSelected={onEntriesSelected}
            />
        </StyledTable>
    )
}

export default EntryTable
