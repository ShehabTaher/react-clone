import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => console.log(response.data))
        .catch((error) => console.error('Error:', error));
}
export const getBlogs = createAsyncThunk('blogs/getBlogs', fetchData())

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        Blogs: [],
        loading: false
    },
    // reducers: {
    //     [getBlogs.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.blogs = action.payload
    //         // console.log(action.payload);

    //     },
    // },
    extraReducers: {
        // [getBlogs.pending]: (state, action) => {
        //     state.loading = true
        // },
        [getBlogs.fulfilled]: (state, action) => {
            state.loading = false
            state.blogs = action.payload
            // console.log(action.payload);

        },
        // [getBlogs.rejected]: (state, action) => {
        //     state.loading = false
        // }

    }
})

// export const { getBlogs } = blogSlice.actions
export default blogSlice.reducer