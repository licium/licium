import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type NavSection = 'id' | 'reg' | 'cert' | 'veri'

export interface NavigationState {
  selectedSection: NavSection
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    selectedSection: 'id',
  } as NavigationState,
  reducers: {
    goToSection: (state, action: PayloadAction<NavSection>) => {
      state.selectedSection = action.payload
    },
  },
})

export const { goToSection } = navigationSlice.actions

export const selectNavSection = (state: RootState) =>
  state.navigation.selectedSection

export default navigationSlice.reducer
