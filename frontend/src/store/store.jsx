import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import foodSlice from './foodSlice';

const store = configureStore({
    reducer:{
        food:foodSlice,
        cart: cartReducer,
    }
})
export default store;