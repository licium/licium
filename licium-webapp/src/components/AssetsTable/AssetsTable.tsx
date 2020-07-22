import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectContentFromAssetTable,
  selectedIds,
  toggleSelect,
} from '../../store/asset/assetSlice'
import './AssetsTable.scss'

export default function AssetsTable() {
  const tableData = useSelector(selectContentFromAssetTable)
  const dispatch = useDispatch()
  const selectedItems = useSelector(selectedIds)

  const handleRowClick = (id: string) => {
    dispatch(toggleSelect(id))
  }

  const isChecked = (id: string) => selectedItems.includes(id)

  const tableBody = tableData.map((item) => (
    <tr
      key={item.id}
      onClick={() => handleRowClick(item.id)}
      className={isChecked(item.id) ? 'selected' : ''}
    >
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
