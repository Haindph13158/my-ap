import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import StudentsApi from '../../app/data/student';

export const fetchInfoUser = createAsyncThunk(
  'infoUser/fetchInfoUser',
  async (action) => {
    const {data} = await StudentsApi.getDetailStudent(action)
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  info:{}
};

export const infoUserSlice = createSlice({
  name: 'infoUser',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchInfoUser.fulfilled, (state, action) => {
      state.info = action.payload
    });
    builder.addCase(fetchInfoUser.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(fetchInfoUser.pending, state => {
      state.loading = true;
    });
  },
});

export default infoUserSlice.reducer;
