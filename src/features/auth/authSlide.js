import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    // type action
    "login/fetchUser",
    async () => {
        const { data } = await axios.get(
            "https://5e79b4b817314d00161333da.mockapi.io/product"
        );
        return data;
    }
);

const initialState = {
    error: "",
    loading: false,
    users: []
}

export const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log("action.payload",action.payload);
            state.users = action.payload
        },
        logout: (state, action) => {
            state.users = []
        }
    },
    extraReducers: (builder) => {
        // trường hợp 1: gọi đến action fetchProduct và thành công
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log("fullfilled action", action.payload);
            state.users = action.payload;
            state.loading = false;
        });

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = "Không thể truy xuất dữ liệu";
        });

        // trường hợp 2: Trang thai call api chua thanh cong
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        // fullfillmed, rejected, pending
    }
})



// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions
export default authSlice.reducer