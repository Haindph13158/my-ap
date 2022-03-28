import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import pointApi from '../../app/data/pointApi';
import { point } from '../fakeData';

export const fetchPoint = createAsyncThunk(
  'point/fetchPoint',
  async (action) => {
    const {data} = await pointApi(action)
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  point:[]
};

export const pointSlice = createSlice({
  name: 'point',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPoint.fulfilled, (state, action) => {
      state.point = action.payload
    });
    builder.addCase(fetchPoint.rejected, (state, action) => {
      state.error = action.payload;
      state.point = point
    });
    builder.addCase(fetchPoint.pending, state => {
      state.loading = true;
    });
  },
});

export default pointSlice.reducer;
