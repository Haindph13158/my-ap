import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import SchedulesApi from '../../app/data/schedules';
import {dataSchedule, fakeData} from '../fakeData';

export const fetchSchedules = createAsyncThunk(
  // type action
  'schedules/fetchSchedules',
  async (action) => {
      const {data} = await SchedulesApi.getSchedule(action)
     return data.data;
   }
);

const initialState = {
  error: '',
  loading: false,
  schedules: fakeData[4].data,
  listSchedule: [],
  listTest: []
};

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    onSetSchedule: (state, action) => {
      const {tabLabel} = action.payload;
      const {data} = fakeData.find(item => item.keyIndex === tabLabel);
      state.schedules = data;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSchedules.fulfilled, (state, action) => {
      state.listSchedule = action.payload
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
