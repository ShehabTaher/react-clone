import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import userIdReducer from './userIdSlice'
import blogIdReducer from './blogIdSlice'

const rootReducer = combineReducers({
    user: userReducer,
    userId: userIdReducer,
    blogId: blogIdReducer
});

export default rootReducer;