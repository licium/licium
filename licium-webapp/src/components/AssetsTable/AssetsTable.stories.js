import React from 'react'
import AssetsTable from './AssetsTable'
import { manyDemoItems } from './manyDemoItems'

export default {
  title: 'Identification Table',
  component: AssetsTable,
}

export const emptyTable = () => {
  return <AssetsTable tableData={[]} />
}

export const withEntries = () => {
  return <AssetsTable tableData={manyDemoItems} />
}
