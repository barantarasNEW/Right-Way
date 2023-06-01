import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCountriesName } from "../api/getCountriesName";

interface countriesName {
  names: any[];
  loading: boolean;
  error: string;
}

const initialState: countriesName = {
  names: [],
  loading: false,
  error: ""
};

const countriesNameSlice = createSlice({
  name: 'countriesName',
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

export default countriesNameSlice.reducer;
export const init = createAsyncThunk("countriesName/fetch", () => {
  return fetchCountriesName();
});