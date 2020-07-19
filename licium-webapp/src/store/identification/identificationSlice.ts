import { Moment } from 'moment'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import IdentificationTable from '../../components/Identification/IdentificationTable/IdentificationTable'

export interface IdentificationItem {
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
  initialState: [] as IdentificationTable,
  reducers: {
    clear: (state) => [],
    addItem: (state, action: PayloadAction<IdentificationItem>) => {
      state.push(action.payload)
    },
    addItems: (state, action: PayloadAction<IdentificationItem[]>) => {
      action.payload.forEach((item) => state.push(item))
    },
  },
})

export const { clear, addItem, addItems } = identificationTableSlice.actions

export const selectContentFromIdentificationTable = (state: RootState) =>
  state.identificationTable

export default identificationTableSlice.reducer
