import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import SchedulesApi from '../../app/data/schedules';
import {dataSchedule, fakeData} from '../fakeData';

export const fetchSchedules = createAsyncThunk(
  // type action
  'schedules/fetchSchedules',
  async action => {
    // var myHeaders = new Headers();
    // myHeaders.append('Accept', 'application/json');
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // var formdata = new FormData();

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow',
    // };

    // fetch(
    //   'https://api.poly.edu.vn/ssm-api/fu/schedule/get-schedule?campus_id=ph&days=7&user_code=PH12934',
    //   requestOptions,
    // )
    //   .then(response => response.text())
    //   .then(result => console.log(JSON.parse(result)))
    //   .catch(error => console.log('error', error));
    // return data;
  },
);

const initialState = {
  error: '',
  loading: false,
  schedules: fakeData[4].data,
  listSchedule: '',
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
