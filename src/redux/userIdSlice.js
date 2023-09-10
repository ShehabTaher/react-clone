// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchUserDataById } from './actions';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const userIdSlice = createSlice({
    name: 'userId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDataById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserDataById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserDataById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default userIdSlice.reducer;
