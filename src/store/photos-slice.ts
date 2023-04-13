import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Photo } from '../interfaces/response';

type PhotosState = {
  photos: Photo[];
};

const initialState: PhotosState = {
  photos: [],
};

const searchSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addNewPhotos(state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
  },
});

export const { addNewPhotos } = searchSlice.actions;

export default searchSlice.reducer;
