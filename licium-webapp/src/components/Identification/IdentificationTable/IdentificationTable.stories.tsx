import { StoryFn } from '@storybook/addons'
import moment from 'moment'
import React from 'react'
import { Provider } from 'react-redux'
import {
  addItems,
  clear,
  IdentificationItem,
  toggleSelect,
} from '../../../store/identification/identificationSlice'
import { store } from '../../../store/store'
import IdentificationTable from './IdentificationTable'
import faker from 'faker'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

const demoItems: IdentificationItem[] = [
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

const manyDemoItems = (numberOfItems: number): IdentificationItem[] =>
  [...Array(numberOfItems)].map((x) => ({
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
  component: IdentificationTable,
  decorators: [withProvider],
}

export const emptyTable = () => {
  store.dispatch(clear())
  return <IdentificationTable></IdentificationTable>
}

export const withSingleEntry = () => {
  store.dispatch(clear())
  store.dispatch(addItems(demoItems))
  return <IdentificationTable></IdentificationTable>
}

export const withManyRandomEntries = () => {
  store.dispatch(clear())
  store.dispatch(addItems(manyDemoItems(100)))
  return <IdentificationTable></IdentificationTable>
}

export const withItemsPreselected = () => {
  const demoItems = manyDemoItems(10)
  const idsToSelect = demoItems.slice(0, 3).map((item) => item.id)
  store.dispatch(clear())
  store.dispatch(addItems(demoItems))
  idsToSelect.forEach((id) => store.dispatch(toggleSelect(id)))
  return <IdentificationTable></IdentificationTable>
}
