import React, { useEffect } from 'react'
import { useRowSelect, useTable } from 'react-table'
import {
    Table as ChakraTable,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import IndeterminateCheckbox from './IndeterminateCheckbox'

const Table = ({ columns, data, onEntriesSelected = () => {} }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
    } = useTable({ columns, data }, useRowSelect, (hooks) => {
        hooks.visibleColumns.push((columns) => [
            // Let's make a column for selection
            {
                id: 'selection',
                // The header can use the table's getToggleAllRowsSelectedProps method
                // to render a checkbox
                Header: ({ getToggleAllRowsSelectedProps }) => (
                    <div className="centered">
                        <IndeterminateCheckbox
                            {...getToggleAllRowsSelectedProps()}
                        />
                    </div>
                ),
                // The cell can use the individual row's getToggleRowSelectedProps method
                // to the render a checkbox
                Cell: ({ row }) => (
                    <div className="centered">
                        <IndeterminateCheckbox
                            {...row.getToggleRowSelectedProps()}
                        />
                    </div>
                ),
            },
            ...columns,
        ])
    })

    useEffect(
        () => onEntriesSelected(selectedFlatRows.map((row) => row.original)),
        [selectedFlatRows, onEntriesSelected]
    )

    return (
        <ChakraTable {...getTableProps()}>
            <Thead>
                {headerGroups.map((headerGroup) => (
                    <Tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <Th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </Th>
                        ))}
                    </Tr>
                ))}
            </Thead>
            <Tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <Tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <Td
                                        {...cell.getCellProps([
                                            {
                                                className:
                                                    cell.column.className,
                                            },
                                        ])}
                                    >
                                        {cell.render('Cell')}
                                    </Td>
                                )
                            })}
                        </Tr>
                    )
                })}
            </Tbody>
        </ChakraTable>
    )
}

export default Table
