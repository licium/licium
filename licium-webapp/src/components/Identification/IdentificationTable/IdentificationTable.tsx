import React, { ChangeEvent } from 'react'
import { Table, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectContentFromIdentificationTable } from '../../../store/identification/identificationSlice'
import './IdentificationTable.css'
import {
  selectItem,
  selectedIds,
} from '../../../store/identification/identificationSlice'

export default function IdentificationTable() {
  const tableData = useSelector(selectContentFromIdentificationTable)
  const dispatch = useDispatch()
  const selectedItems = useSelector(selectedIds)

  const handleCheckbox = (id: string, event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(selectItem(id))
    }
  }

  const isChecked = (id: string) => selectedItems.includes(id)

  const tableBody = tableData.map((item) => (
    <tr key={item.id}>
      <td className="centered">
        <input
          type="checkbox"
          onChange={(e) => handleCheckbox(item.id, e)}
          checked={isChecked(item.id)}
        ></input>
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
    <Table size="sm" striped bordered hovered>
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
