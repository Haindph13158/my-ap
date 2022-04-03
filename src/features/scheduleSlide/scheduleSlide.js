import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import SchedulesApi from '../../app/data/schedules';


export const fetchSchedules = createAsyncThunk(
  // type action
  'schedules/fetchSchedules',
  async action => {
    const {data} = await SchedulesApi.getSchedule(action);
    return data.data;
  },
);

const initialState = {
  error: '',
  loading: false,
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(fetchSchedules.fulfilled, (state, action) => {
      state.schedules = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchSchedules.rejected, (state, action) => {
      state.error = 'Không thể truy xuất dữ liệu';
    });

    builder.addCase(fetchSchedules.pending, state => {
      state.loading = true;
    });
  },
});

export const {onSetSchedule} = scheduleSlice.actions;
export default scheduleSlice.reducer;
