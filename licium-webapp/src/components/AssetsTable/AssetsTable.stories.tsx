import { StoryFn } from '@storybook/addons'
import moment from 'moment'
import React from 'react'
import { Provider } from 'react-redux'
import {
  addItems,
  clear,
  AssetItem,
  toggleSelect,
} from '../../store/asset/assetSlice'
import { store } from '../../store/store'
import AssetsTable from './AssetsTable'
import faker from 'faker'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

const demoItems: AssetItem[] = [
  {
    id: 'randomId',
    title: 'aysmptotic behaviour of eisenstein ingegrals',
    metaCode: 'LoD5',
    contentCode: 'LoD5',
    fileName: '2020-07-11-eisenstein-1.docx',
    location: 'Research PhD',
    timestamp: moment('2020-07-09T13:38Z'),
  },
]

export const manyDemoItems = (numberOfItems: number): AssetItem[] =>
  [...Array(numberOfItems)].map(() => ({
    id: faker.random.uuid(),
    title: faker.system.fileName(),
    metaCode: faker.random.alphaNumeric(5),
    contentCode: faker.random.alphaNumeric(5),
    fileName: faker.system.fileName(),
    location: faker.system.directoryPath(),
    timestamp: moment(faker.date.past()),
  }))

export default {
  title: 'Identification Table',
  component: AssetsTable,
  decorators: [withProvider],
  excludeStories: ['manyDemoItems'],
}

export const emptyTable = () => {
  store.dispatch(clear())
  return <AssetsTable />
}

export const withSingleEntry = () => {
  store.dispatch(clear())
  store.dispatch(addItems(demoItems))
  return <AssetsTable />
}

export const withManyRandomEntries = () => {
  store.dispatch(clear())
  store.dispatch(addItems(manyDemoItems(100)))
  return <AssetsTable />
}

export const withItemsPreselected = () => {
  const demoItems = manyDemoItems(10)
  const idsToSelect = demoItems.slice(0, 3).map((item) => item.id)
  store.dispatch(clear())
  store.dispatch(addItems(demoItems))
  idsToSelect.forEach((id) => store.dispatch(toggleSelect(id)))
  return <AssetsTable />
}
