import React from 'react'
import Registration from './Registration'
import { StoryFn } from '@storybook/addons'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { clear, addItems, toggleSelect } from '../../store/asset/assetSlice'
import { manyDemoItems } from '../AssetsTable/manyDemoItems'

const withStore = (storyFn: StoryFn<any>) => {
  store.dispatch(clear())
  return <Provider store={store}>{storyFn()}</Provider>
}

export default {
  title: 'Registration',
  component: Registration,
  decorators: [withStore],
}

export const Default = () => {
  const items = manyDemoItems
  items.map((item) => item.id).forEach((id) => store.dispatch(toggleSelect(id)))
  store.dispatch(addItems(items))
  return <Registration />
}
