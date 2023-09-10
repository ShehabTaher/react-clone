// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogDataById } from './actions';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

const blogIdSlice = createSlice({
    name: 'blogId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogDataById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBlogDataById.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // console.log(state.data);
            })
            .addCase(fetchBlogDataById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default blogIdSlice.reducer;
