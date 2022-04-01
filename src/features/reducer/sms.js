import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import smsApi from '../../app/data/smsApi';
import StudentsApi from '../../app/data/student';
import { sms } from '../fakeData';

export const fetchSms = createAsyncThunk(
  'sms/fetchSms',
  async (action) => {
    const {data} = await smsApi(action)

    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  sms:[]
};

export const smsSlice = createSlice({
  name: 'sms',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchSms.fulfilled, (state, action) => {
      state.sms = action.payload
    });
    builder.addCase(fetchSms.rejected, (state, action) => {
      state.error = action.payload;
      // state.sms = sms
    });
    builder.addCase(fetchSms.pending, state => {
      state.loading = true;
    });
  },
});

export default smsSlice.reducer;
