import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectContentFromIdentificationTable,
  selectedIds,
  toggleSelect,
} from '../../../store/identification/identificationSlice'
import './IdentificationTable.css'

export default function IdentificationTable() {
  const tableData = useSelector(selectContentFromIdentificationTable)
  const dispatch = useDispatch()
  const selectedItems = useSelector(selectedIds)

  const handleRowClick = (id: string) => {
    dispatch(toggleSelect(id))
  }

  const isChecked = (id: string) => selectedItems.includes(id)

  const tableBody = tableData.map((item) => (
    <tr key={item.id} onClick={() => handleRowClick(item.id)}>
      <td className="centered">
        <input type="checkbox" checked={isChecked(item.id)}></input>
      </td>
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
        <tr>
          <th>Select</th>
          <th>Title</th>
          <th>Meta-Code</th>
          <th>Content-Code</th>
          <th>Filename</th>
          <th>Location</th>
          <th>Stamp</th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </Table>
  )
}
