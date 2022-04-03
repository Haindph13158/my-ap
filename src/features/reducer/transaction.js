import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TuitionsApi from '../../app/data/tuitionApi';

export const fetchTransaction = createAsyncThunk(
  'tuitions/fetchTransaction',
  async (action) => {
    const {data} = await TuitionsApi.getTransactionhistor(action)
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  transaction: []
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTransaction.fulfilled, (state, action) => {
      state.transaction = action.payload.reverse();
      state.loading = false;
    });
    builder.addCase(fetchTransaction.rejected, (state, action) => {
      state.error = action.payload;
      // state.info = infoUser
    });
    builder.addCase(fetchTransaction.pending, state => {
      state.loading = true;
    });
  },
});

export default transactionSlice.reducer;
