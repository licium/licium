import { StoryFn } from '@storybook/addons'
import React from 'react'
import { Provider } from 'react-redux'
import { addItems, clear, toggleSelect } from '../../store/asset/assetSlice'
import { store } from '../../store/store'
import AssetsTable from './AssetsTable'
import { manyDemoItems } from './manyDemoItems'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

export default {
  title: 'Identification Table',
  component: AssetsTable,
  decorators: [withProvider],
}

export const emptyTable = () => {
  store.dispatch(clear())
  return <AssetsTable />
}

export const withSingleEntry = () => {
  store.dispatch(clear())
  store.dispatch(addItems(manyDemoItems))
  return <AssetsTable />
}

export const withManyEntries = () => {
  store.dispatch(clear())
  store.dispatch(addItems(manyDemoItems))
  return <AssetsTable />
}

export const withItemsPreselected = () => {
  const demoItems = manyDemoItems
  console.log(JSON.stringify(demoItems))
  const idsToSelect = demoItems.slice(0, 3).map((item) => item.id)
  store.dispatch(clear())
  store.dispatch(addItems(demoItems))
  idsToSelect.forEach((id) => store.dispatch(toggleSelect(id)))
  return <AssetsTable />
}
