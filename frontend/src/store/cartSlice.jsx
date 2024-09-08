import { createSlice } from '@reduxjs/toolkit';
import {food_list} from '../assets/frontend_assets/assets';

const initialState = {
    cartItem: {}
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemId = action.payload;
            console.log('from slice',itemId)
            if (state.cartItem[itemId]) {
                state.cartItem[itemId] += 1;
            }
            else {
                state.cartItem[itemId] = 1;
            }
        },
        removeCart: (state, action) => {
            const itemId = action.payload;
            if (state.cartItem[itemId] > 1) {
                state.cartItem[itemId] -= 1;
            }
            else {
                delete state.cartItem[itemId];
            }
        }
    }
})

export const totalAmount = (state) => {
    let totalPrice = 0;
    for(let item in state.cart.cartItem){
        if(state.cart.cartItem[item] > 0){
            let itemInfo = food_list.find((product) => product._id === item);
            totalPrice += itemInfo.price * state.cart.cartItem[item];
        }
    }
    return totalPrice;
}

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;