import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AssetItem,
  selectContentFromAssetTable,
  selectedIds,
  toggleSelect,
  sortAssets,
} from '../../store/asset/assetSlice'
import './AssetsTable.scss'

export default function AssetsTable() {
  const tableData = useSelector(selectContentFromAssetTable)

  const dispatch = useDispatch()
  const selectedItems = useSelector(selectedIds)

  const handleRowClick = (id: string) => {
    dispatch(toggleSelect(id))
  }

  const sortBy = (key: keyof AssetItem) => {
    dispatch(sortAssets(key))
  }

  const isChecked = (id: string) => selectedItems.includes(id)

  const tableBody = () =>
    tableData.map((item) => (
      <tr
        key={item.id}
        onClick={() => handleRowClick(item.id)}
        className={isChecked(item.id) ? 'is-selected' : ''}
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
    <table className="table is-bordered is-striped is-hoverable">
      <thead>
        <tr>
          <th onClick={() => sortBy('title')}>Title</th>
          <th onClick={() => sortBy('metaCode')}>Meta-Code</th>
          <th onClick={() => sortBy('contentCode')}>Content-Code</th>
          <th onClick={() => sortBy('fileName')}>Filename</th>
          <th onClick={() => sortBy('location')}>Location</th>
          <th onClick={() => sortBy('timestamp')}>Stamp</th>
        </tr>
      </thead>
      <tbody>{tableBody()}</tbody>
    </table>
  )
}
