import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Moment } from 'moment'
import { RootState } from '../store'

export interface IdentificationItem {
  id: string
  title: string
  metaCode: string
  contentCode: string
  fileName: string
  location: string
  timestamp: Moment
}

export type IdentificationTable = IdentificationItem[]

const identificationTableSlice = createSlice({
  name: 'identificationTable',
  initialState: {
    items: [] as IdentificationTable,
    selectedIds: [] as string[],
  },
  reducers: {
    clear: (state) => {
      state.items = []
      state.selectedIds = []
    },
    addItem: (state, action: PayloadAction<IdentificationItem>) => {
      state.items.push(action.payload)
    },
    addItems: (state, action: PayloadAction<IdentificationItem[]>) => {
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
  },
})

export const {
  clear,
  addItem,
  addItems,
  toggleSelect,
} = identificationTableSlice.actions

export const selectContentFromIdentificationTable = (state: RootState) =>
  state.identificationTable.items

export const selectedIds = (state: RootState) =>
  state.identificationTable.selectedIds

export default identificationTableSlice.reducer
