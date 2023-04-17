import { configureStore } from '@reduxjs/toolkit';
import searchReduser from './search-slice';
import photosReduser from './photos-slice';
import cvReduser from './cv-slice';
import { unsplashApi } from './unsplash-api';

const store = configureStore({
  reducer: {
    searchValue: searchReduser,
    photos: photosReduser,
    cv: cvReduser,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefauldMiddleware) => getDefauldMiddleware().concat(unsplashApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
