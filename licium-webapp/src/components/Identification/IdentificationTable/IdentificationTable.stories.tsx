import React from 'react'
import { Provider } from 'react-redux'
import { StoryFn } from '@storybook/addons'
import { store } from '../../../store/store'
import { storiesOf } from '@storybook/react'
import IdentificationTable from './IdentificationTable'
import {
  addItems,
  IdentificationItem,
  clear,
} from '../../../store/identification/identificationSlice'
import moment from 'moment'

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

storiesOf('Identification Table', module)
  .addDecorator(withProvider)
  .add('Empty Table', () => {
    store.dispatch(clear())
    return <IdentificationTable></IdentificationTable>
  })
  .add('With Data', () => {
    store.dispatch(clear())
    store.dispatch(addItems(demoItems))
    return <IdentificationTable></IdentificationTable>
  })
