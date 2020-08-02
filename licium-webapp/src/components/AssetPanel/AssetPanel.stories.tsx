import React from 'react'
import { StoryFn } from '@storybook/addons'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import 'bulma/css/bulma.min.css'
import AssetPanel from './AssetPanel'
import { addItems, toggleSelect, clear } from '../../store/asset/assetSlice'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'

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
  const demoItems = manyDemoItems
  store.dispatch(addItems(demoItems))
  demoItems.forEach((i) => store.dispatch(toggleSelect(i.id)))
  return <AssetPanel />
}
