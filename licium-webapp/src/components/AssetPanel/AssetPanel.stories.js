import React from 'react'
import 'bulma/css/bulma.min.css'
import AssetPanel from './AssetPanel'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'

export default {
  title: 'AssetPanel',
  component: AssetPanel,
}

export const Default = () => <AssetPanel selectedAssets={[]} />
export const withSelectedAssets = () => {
  return <AssetPanel selectedAssets={manyDemoItems} />
}
