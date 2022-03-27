import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import SchedulesApi from '../../app/data/schedules';
import {dataAttendance, dataSchedule, fakeData} from '../fakeData';

export const fetchAttendace = createAsyncThunk(
  'schedules/fetchAttendace',
  async (action) => {
    const {data} = await SchedulesApi.getListAttendance(action)
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  attendances: [],
};

export const attendanceSlice = createSlice({
  name: 'attendances',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    // trường hợp 1: gọi đến action fetchProduct và thành công
    builder.addCase(fetchAttendace.fulfilled, (state, action) => {
      state.attendances = action.payload
    });

    builder.addCase(fetchAttendace.rejected, (state, action) => {
      state.attendances = action.payload;
    });

    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchAttendace.pending, state => {
      state.loading = true;
    });
    // fullfillmed, rejected, pending
  },
});

// Action creators are generated for each case reducer function
export const {onSetSchedule} = attendanceSlice.actions;
export default attendanceSlice.reducer;
