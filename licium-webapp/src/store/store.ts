import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import NavigationReducer from './navigation/navigationSlice'
import IdentificationTableReducer from './identification/identificationSlice'

export const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    identificationTable: IdentificationTableReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
