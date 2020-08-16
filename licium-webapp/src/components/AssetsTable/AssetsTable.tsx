import React, { useState } from 'react'
import './AssetsTable.scss'
import { AssetItem } from '../Assets/Assets'

export default function AssetsTable(props: {
  tableData: AssetItem[]
  onItemSelected?: (items: AssetItem[]) => void
}) {
  const [tableData, setTableData] = useState(props.tableData)
  const [sortKey, setSortKey] = useState('title')
  const [descending, setDescending] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleRowClick = (id: string) => {
    const mutableIds = [...selectedIds]

    selectedIds.includes(id)
      ? mutableIds.splice(selectedIds.indexOf(id), 1)
      : mutableIds.push(id)

    setSelectedIds(mutableIds)
    if (props.onItemSelected) {
      props.onItemSelected(
        tableData.filter((item) => mutableIds.includes(item.id))
      )
    }
  }

  const isChecked = (id: string) => selectedIds.includes(id)

  const sortBy = (key: keyof AssetItem) => {
    setDescending(key === sortKey ? !descending : true)
    setSortKey(key)
    setTableData(
      [...tableData].sort((a, b) =>
        descending ? (a[key] < b[key] ? 1 : -1) : a[key] > b[key] ? 1 : -1
      )
    )
  }

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
