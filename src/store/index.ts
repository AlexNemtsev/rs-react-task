import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './search-slice';
import photosReduser from './photos-slice';
import cvReduser from './cv-slice';

const store = configureStore({
  reducer: {
    searchValue: searchReduser,
    photos: photosReduser,
    сv: cvReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
