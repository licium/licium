import React from 'react'
import Assets from './Assets'
import { StoryFn } from '@storybook/addons'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import { addItems, clear } from '../../store/asset/assetSlice'
import { manyDemoItems } from '../AssetsTable/AssetsTable.stories'
import { MemoryRouter } from 'react-router-dom'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

const withRouter = (storyFn: StoryFn<any>) => (
  <MemoryRouter>{storyFn()}</MemoryRouter>
)

export default {
  title: 'Assets',
  component: <Assets />,
  decorators: [withProvider, withRouter],
}

export const Default = () => {
  store.dispatch(clear())
  store.dispatch(addItems(manyDemoItems(10)))
  return <Assets />
}
