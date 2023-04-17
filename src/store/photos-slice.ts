import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../interfaces/response';

type PhotosState = {
  photos: Photo[];
};

const initialState: PhotosState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addNewPhotos(state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
  },
});

export const { addNewPhotos } = photoSlice.actions;

export default photoSlice.reducer;
