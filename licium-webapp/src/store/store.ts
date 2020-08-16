import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import NavigationReducer from './navigation/navigationSlice'
import assetTableReducer from './asset/assetSlice'

export const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    assetTable: assetTableReducer,
  },
  middleware: [],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
