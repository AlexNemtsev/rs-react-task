import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchState = {
  search: string;
  prevSearch: string;
};

const initialState: SearchState = {
  search: '',
  prevSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.prevSearch = state.search;
      state.search = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
