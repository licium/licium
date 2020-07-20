import { store } from '../store'
import {
  addItem,
  selectContentFromIdentificationTable,
} from './identificationSlice'
import moment from 'moment'
describe('identification', () => {
  let storeunderTest

  beforeEach(() => {
    storeunderTest = store
  })

  it('can add an item', () => {
    const item = {
      id: 'myId',
      contentCode: 'contentCode',
      fileName: 'filename',
      location: 'location',
      metaCode: 'metacode',
      timestamp: moment(),
      title: 'title',
    }

    store.dispatch(addItem(item))

    const actual = selectContentFromIdentificationTable(store.getState())

    expect(actual).toEqual([item])
  })
})
