import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import complainReducer from '../features/complain/complainSlice'
import commentsReducer from '../features/comment/commentSlice'
export const store=configureStore({
    reducer:{
        auth:authReducer,
        complain:complainReducer,
        comments:commentsReducer
    }
})