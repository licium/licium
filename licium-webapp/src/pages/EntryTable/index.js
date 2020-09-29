import React, { useContext, useMemo } from 'react'
import { Icon } from '@chakra-ui/core'
import { ISCCButton } from '../../components/InfoButton/ISCCButton'

import { RegistrationId } from '../../components/RegistrationId'
import RegisteredButton from '../../components/InfoButton/RegisteredButton'
import { StyledTable } from './elements'
import EditableCell from '../../components/EditableTableCell'
import Table from '../../components/Table'
import { ISCCContext } from '../../contexts/ISCCContext'

const EntryTable = () => {
    const { isccs } = useContext(ISCCContext)

    const data = useMemo(
        () =>
            isccs.map((iscc) => ({
                star: <Icon name="star" />,
                filename: iscc.title,
                title: <EditableCell iscc={iscc} />,
                tag: '-',
                date: new Date(iscc.date).toISOString().replace('T', ' '),
                iscc: <ISCCButton iscc={iscc} />,
                registration: <RegisteredButton iscc={iscc} />,
                registrationId: <RegistrationId iscc={iscc} />,
            })),
        [isccs]
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Star',
                accessor: 'star',
                className: 'centered',
            },
            {
                Header: 'Filename',
                accessor: 'filename',
            },
            {
                Header: 'Embedded Title',
                accessor: 'title',
            },
            {
                Header: 'Tag',
                accessor: 'tag',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'ISCC',
                accessor: 'iscc',
                className: 'centered',
            },
            {
                Header: 'Registration',
                accessor: 'registration',
                className: 'centered',
            },
            {
                Header: 'Registration ID',
                accessor: 'registrationId',
                className: 'centered',
            },
        ],
        []
    )

    return (
        <StyledTable>
            <Table columns={columns} data={data} />
        </StyledTable>
    )
}

export default EntryTable
