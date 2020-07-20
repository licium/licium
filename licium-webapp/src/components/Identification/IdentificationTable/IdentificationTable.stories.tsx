import { StoryFn } from '@storybook/addons'
import moment from 'moment'
import React from 'react'
import { Provider } from 'react-redux'
import {
  addItems,
  clear,
  IdentificationItem,
} from '../../../store/identification/identificationSlice'
import { store } from '../../../store/store'
import IdentificationTable from './IdentificationTable'
import faker from 'faker'

const withProvider = (story: StoryFn<any>) => (
  <Provider store={store}>{story()}</Provider>
)

const demoItems: IdentificationItem[] = [
  {
    title: 'aysmptotic behaviour of eisenstein ingegrals',
    metaCode: 'LoD5',
    contentCode: 'LoD5',
    fileName: '2020-07-11-eisenstein-1.docx',
    location: 'Research PhD',
    timestamp: moment('2020-07-09T13:38Z'),
  },
]

const manyDemoItems: IdentificationItem[] = [...Array(100)].map((x) => ({
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
  store.dispatch(addItems(manyDemoItems))
  return <IdentificationTable></IdentificationTable>
}
