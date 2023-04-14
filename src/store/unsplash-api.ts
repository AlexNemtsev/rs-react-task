import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Client-ID ${import.meta.env.VITE_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getPhotos: build.query({
      query: () => 'photos',
    }),
  }),
});

export { unsplashApi };
export const { useGetPhotosQuery } = unsplashApi;
