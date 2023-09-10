// actions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('userData/fetch', async () => {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
});
export const fetchBlogDataById = createAsyncThunk(
    'blogIdData/fetchById',
    async (id) => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }
);
export const fetchUserDataById = createAsyncThunk(
    'userIdData/fetchById',
    async (id) => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    }
);