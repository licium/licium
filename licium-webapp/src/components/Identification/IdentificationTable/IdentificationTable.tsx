import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectContentFromIdentificationTable } from '../../../store/identification/identificationSlice'

export default function IdentificationTable() {
  const tableData = useSelector(selectContentFromIdentificationTable)

  const tableBody = tableData.map((item) => (
    <tr>
      <td>{item.title}</td>
      <td>{item.metaCode}</td>
      <td>{item.contentCode}</td>
      <td>{item.fileName}</td>
      <td>{item.location}</td>
      <td>{item.timestamp.toISOString(true)}</td>
    </tr>
  ))

  return (
    <Table size="sm" striped bordered hover>
      <thead>
        <th>Title</th>
        <th>Meta-Code</th>
        <th>Content-Code</th>
        <th>Filename</th>
        <th>Location</th>
        <th>Stamp</th>
      </thead>
      <tbody>{tableBody}</tbody>
    </Table>
  )
}
