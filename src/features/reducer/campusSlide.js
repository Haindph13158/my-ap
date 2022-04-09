import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CampusApi from '../../app/data/campusApi';

export const fetchCampus = createAsyncThunk(
  'campus/fetchCampus',
  async () => {
    const {data} = await CampusApi.getCampus();
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  campus: []
};

export const campusSlice = createSlice({
  name: 'campus',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCampus.fulfilled, (state, action) => {
      state.campus = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCampus.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCampus.pending, state => {
      state.loading = true;
    });
  },
});

export default campusSlice.reducer;
