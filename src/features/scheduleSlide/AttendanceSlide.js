import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import SchedulesApi from '../../app/data/schedules';
import {dataAttendance, dataSchedule, fakeData} from '../fakeData';

export const fetchAttendance = createAsyncThunk(
  // type action
  'schedules/fetchSchedules',
  async (action) => {
    const data = await (await SchedulesApi.getListAttendance("ph", 39, "ph12934")).data;
    return data;
  },
);

const initialState = {
  error: '',
  loading: false,
  attendances: dataAttendance,
};

export const attendanceSlice = createSlice({
  name: 'attendances',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    // trường hợp 1: gọi đến action fetchProduct và thành công
    builder.addCase(fetchAttendance.fulfilled, (state, action) => {
      console.log('fullfilled action', action.payload);
    });

    builder.addCase(fetchAttendance.rejected, (state, action) => {
      console.log('Không thể truy xuất dữ liệu');
      state.attendances = dataAttendance;
      state.error = 'Không thể truy xuất dữ liệu';
    });

    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchAttendance.pending, state => {
      state.loading = true;
    });
    // fullfillmed, rejected, pending
  },
});

// Action creators are generated for each case reducer function
export const {onSetSchedule} = attendanceSlice.actions;
export default attendanceSlice.reducer;
