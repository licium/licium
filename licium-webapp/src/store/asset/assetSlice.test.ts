import { store } from '../store'
import {
  addItem,
  addItems,
  AssetItem,
  selectContentFromAssetTable,
  selectSelectedAssets,
  toggleSelect,
  clearSelection,
} from './assetSlice'
import moment from 'moment'
import * as faker from 'faker'

describe('identification', () => {
  const item: AssetItem = {
    id: faker.random.uuid(),
    contentCode: 'contentCode',
    fileName: faker.system.fileName(),
    location: 'location',
    metaCode: 'metacode',
    timestamp: moment(faker.date.past()),
    title: 'title',
  }

  const createItems = (count: number): AssetItem[] => {
    return [...Array(count)].map(() => ({
      ...item,
      id: faker.random.uuid(),
      fileName: faker.system.fileName(),
      timestamp: moment(),
    }))
  }

  it('can add an item', () => {
    store.dispatch(addItem(item))

    const actual = selectContentFromAssetTable(store.getState())

    expect(actual).toEqual([item])
  })

  it('provides selected Assets', () => {
    const items = createItems(10)
    store.dispatch(addItems(items))
    const firstThreeItems = items.slice(0, 3)
    firstThreeItems
      .map((i) => i.id)
      .forEach((id) => store.dispatch(toggleSelect(id)))

    const actual = selectSelectedAssets(store.getState())

    expect(actual).toEqual(firstThreeItems)
  })

  it('can clear selected Assets', () => {
    const items = createItems(10)
    store.dispatch(addItems(items))
    const firstThreeItems = items.slice(0, 3)
    firstThreeItems
      .map((i) => i.id)
      .forEach((id) => store.dispatch(toggleSelect(id)))
    store.dispatch(clearSelection())

    const actual = selectSelectedAssets(store.getState())

    expect(actual.length).toBe(0)
  })
})
