import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  error: '',
  loading: false,
  notis: []
};

export const notisSlice = createSlice({
  name: 'notis',
  initialState,
  reducers: {
    notification: (state, action) => {
        state.notis = [...state.notis, action.payload]
    },
  },
  extraReducers: builder => {
    // builder.addCase(fetchPosts.fulfilled, (state, action) => {
    //   state.posts = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(fetchPosts.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(fetchPosts.pending, state => {
    //   state.loading = true;
    // });
  },
});

export const { notification } = notisSlice.actions

export default notisSlice.reducer;
