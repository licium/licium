import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import NavigationReducer from './navigation/navigationSlice'

export const store = configureStore({
  reducer: {
    navigation: NavigationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
