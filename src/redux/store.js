// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from './blogSlice'

export default configureStore({
    reducer: {
        blog: BlogReducer,
    }
})

