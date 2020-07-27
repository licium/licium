import React from 'react'
import { StoryFn } from '@storybook/addons'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import 'bulma/css/bulma.min.css'
import AssetPanel from './AssetPanel'
import { addItems, toggleSelect, clear } from '../../store/asset/assetSlice'
import { manyDemoItems } from '../AssetsTable/AssetsTable.stories'
import '@fortawesome/fontawesome-free/css/all.min.css'

const withStore = (storyFn: StoryFn<any>) => {
  store.dispatch(clear())
  return <Provider store={store}>{storyFn()}</Provider>
}

export default {
  title: 'AssetPanel',
  component: AssetPanel,
  decorators: [withStore],
}

export const Default = () => <AssetPanel />
export const withSelectedAssets = () => {
  const demoItems = manyDemoItems(10)
  store.dispatch(addItems(demoItems))
  demoItems.forEach((i) => store.dispatch(toggleSelect(i.id)))
  return <AssetPanel />
}
