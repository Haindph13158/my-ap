import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TuitionsApi from '../../app/data/tuitionApi';

export const fetchTuiTion = createAsyncThunk(
  'tuitions/fetchTuiTion',
  async (action) => {
    const {data} = await TuitionsApi.getDetailFee(action)
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  tuitions:{}
};

export const tuitionSlice = createSlice({
  name: 'tuitions',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTuiTion.fulfilled, (state, action) => {
      state.tuitions = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTuiTion.rejected, (state, action) => {
      state.error = action.payload;
      // state.info = infoUser
    });
    builder.addCase(fetchTuiTion.pending, state => {
      state.loading = true;
    });
  },
});

export default tuitionSlice.reducer;
