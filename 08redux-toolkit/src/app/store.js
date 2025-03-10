// S1 configurestore
import{configureStore} from '@reduxjs/toolkit';
import todoReducer from "../Features/Todo/tosoSlice"
export const store=configureStore({
    reducer:todoReducer
})