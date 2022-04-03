import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getPostApi from '../../app/data/postApi';

export const fetchPosts = createAsyncThunk(
  'tuitions/fetchPosts',
  async (action) => {
    const {data} = await getPostApi(action);
    return data.data
  }
)
const initialState = {
  error: '',
  loading: false,
  posts: []
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true;
    });
  },
});

export default postsSlice.reducer;
