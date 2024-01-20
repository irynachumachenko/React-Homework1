import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../src/components/counterSlice/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;