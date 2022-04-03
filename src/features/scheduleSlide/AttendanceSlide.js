import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SchedulesApi from '../../app/data/schedules';

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
      state.attendances = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAttendace.rejected, (state, action) => {
      state.error = action.payload;
      // state.attendances = dataAttendance;
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
