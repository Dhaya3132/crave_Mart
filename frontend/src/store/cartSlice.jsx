import { createSlice } from '@reduxjs/toolkit';

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

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
