import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './slice';

const store = configureStore({
  reducer: {
    searchValue: searchReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
