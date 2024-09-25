import { createSlice } from '@reduxjs/toolkit';
import { exampleActionAsync, setAuth } from './action';

export interface ExampleState {
  name: string;
  isAuth?: boolean;
}

const initialState: ExampleState = {
  name: 'example',
  isAuth: false,
};

const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(exampleActionAsync, (state, { payload }) => ({
        ...state,
        name: payload,
      }))
      .addCase(setAuth, (state, { payload }) => ({
        ...state,
        isAuth: payload,
      }));
  },
});

export default slice.reducer;
