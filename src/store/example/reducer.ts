import { createSlice } from '@reduxjs/toolkit';
import { exampleActionAsync } from './action';

export interface ExampleState {
  name: string;
}

const initialState: ExampleState = {
  name: 'example',
};

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(exampleActionAsync, (state, { payload }) => ({
      ...state,
      name: payload,
    }));
  },
});

export default slice.reducer;
