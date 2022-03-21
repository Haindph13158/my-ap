import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import SchedulesApi from '../../app/data/schedules';
import {dataSchedule, fakeData} from '../fakeData';

export const fetchSchedules = createAsyncThunk(
  // type action
  'schedules/fetchSchedules',
  async (action) => {
    console.log(1);
    await axios({
      method: 'get',
      url: 'http://localhost:8866/api/categorys',
      // headers: { 
        // 'Accept': 'application/json',
      // }
    })
    .then(function (response) {
      console.log(222222222, JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(111111111111111, error);
    });
    return data;
  },
);

const initialState = {
  error: '',
  loading: false,
  schedules: fakeData[0].data,
  listSchedule: ''
};

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    onSetSchedule: (state, action) => {
      const {tabLabel} = action.payload;
      const {data} = fakeData.find((item) => item.keyIndex === tabLabel)
      state.schedules = data;
    },
  },
  extraReducers: builder => {
    // trường hợp 1: gọi đến action fetchProduct và thành công
    builder.addCase(fetchSchedules.fulfilled, (state, action) => {
      console.log('fullfilled action', action.payload);
    });

    builder.addCase(fetchSchedules.rejected, (state, action) => {
      console.log('Không thể truy xuất dữ liệu');
      state.listSchedule = dataSchedule;
      state.error = 'Không thể truy xuất dữ liệu';
    });

    // trường hợp 2: Trang thai call api chua thanh cong
    builder.addCase(fetchSchedules.pending, state => {
      state.loading = true;
    });
    // fullfillmed, rejected, pending
  },
});

// Action creators are generated for each case reducer function
export const {onSetSchedule} = scheduleSlice.actions;
export default scheduleSlice.reducer;
