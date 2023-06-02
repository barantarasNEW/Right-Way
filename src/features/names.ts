import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getNames } from "../api/getNames";

interface names {
  names: string[];
  loading: boolean;
  error: string;
}

const initialState: names = {
  names: [],
  loading: false,
  error: ""
};

const namesSlice = createSlice({
  name: 'names',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.loading = false;
      state.names = action.payload;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});

export default namesSlice.reducer;
export const init = createAsyncThunk("names/fetch", () => getNames());