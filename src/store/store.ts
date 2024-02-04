import { configureStore } from '@reduxjs/toolkit';
import formListSlice from 'store/formListSlice';
import violationsSlice from 'store/violationsSlice';

export const store = configureStore({
  reducer: { formListSlice, violationsSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
