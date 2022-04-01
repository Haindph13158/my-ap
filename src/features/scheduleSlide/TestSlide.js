import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import SchedulesApi from '../../app/data/schedules';
export const fetchTest = createAsyncThunk(
  'test/fetchTest',
  async (action) => {
    const {data} = await SchedulesApi.getListTest(action)
    console.log(data);
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  listTest: []
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  extraReducers: builder => {
    // List Test
    builder.addCase(fetchTest.fulfilled, (state, action) => {
      state.listTest = action.payload
    });

    builder.addCase(fetchTest.rejected, (state, action) => {
      state.error = 'Không thể truy xuất dữ liệu';
    });

    builder.addCase(fetchTest.pending, state => {
      state.loading = true;
    });
  },
});

export default testSlice.reducer;
