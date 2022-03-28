import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { infoUser } from '../fakeData';

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
    users: {}
}

export const authSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            state.users = action.payload
        },
        logout: (state, action) => {
            state.users = {}
        },
        fakeLogin: (state, action) => {
            state.users = infoUser
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
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
export const { login, logout, fakeLogin } = authSlice.actions
export default authSlice.reducer