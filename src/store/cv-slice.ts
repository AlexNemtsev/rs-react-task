import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../interfaces/form-interfaces';

type CVState = {
  data: FormData[];
};

const initialState: CVState = {
  data: [],
};

const CVSlice = createSlice({
  name: 'cv',
  initialState,
  reducers: {
    addCV(state, action: PayloadAction<FormData>) {
      state.data.push(action.payload);
    },
  },
});

export const { addCV } = CVSlice.actions;

export default CVSlice.reducer;
