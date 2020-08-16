import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Moment } from 'moment'
import { RootState } from '../store'

export interface AssetItem {
  id: string
  title: string
  metaCode: string
  contentCode: string
  fileName: string
  location: string
  timestamp: Moment
  transactionURL: string
}

export type AssetTable = AssetItem[]

const assetTableSlice = createSlice({
  name: 'assetTable',
  initialState: {
    items: [] as AssetTable,
    selectedIds: [] as string[],
    sortedBy: 'title' as keyof AssetItem,
    descending: true,
  },
  reducers: {
    clear: (state) => {
      state.items = []
      state.selectedIds = []
    },
    addItem: (state, action: PayloadAction<AssetItem>) => {
      state.items.push(action.payload)
    },
    addItems: (state, action: PayloadAction<AssetItem[]>) => {
      action.payload.forEach((item) => state.items.push(item))
    },
    toggleSelect: (state, action: PayloadAction<string>) => {
      if (state.selectedIds.includes(action.payload)) {
        const indexOfId = state.selectedIds.indexOf(action.payload)
        state.selectedIds.splice(indexOfId, 1)
      } else {
        state.selectedIds.push(action.payload)
      }
    },
    clearSelection: (state) => {
      state.selectedIds = []
    },
    sortAssets: (state, action: PayloadAction<keyof AssetItem>) => {
      state.items = state.items.sort((a, b) =>
        state.descending
          ? a[action.payload] < b[action.payload]
            ? 1
            : -1
          : a[action.payload] > b[action.payload]
          ? 1
          : -1
      )
      state.sortedBy === action.payload
        ? (state.descending = !state.descending)
        : (state.sortedBy = action.payload)
    },
  },
})

export const {
  clear,
  addItem,
  addItems,
  toggleSelect,
  clearSelection,
  sortAssets,
} = assetTableSlice.actions

export const selectContentFromAssetTable = (state: RootState) =>
  state.assetTable.items

export const selectedIds = (state: RootState) => state.assetTable.selectedIds

export const selectSelectedAssets = (state: RootState) =>
  state.assetTable.items.filter((selectedItem) => {
    return state.assetTable.selectedIds.includes(selectedItem.id)
  })

export const selectNoAssetSelected = (state: RootState) =>
  state.assetTable.selectedIds.length === 0

export default assetTableSlice.reducer
