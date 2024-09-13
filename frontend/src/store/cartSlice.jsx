import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: {}
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {itemId,token} = action.payload;
            console.log('from slice', itemId);
            if (state.cartItem[itemId]) {
                state.cartItem[itemId] += 1;
            } else {
                state.cartItem[itemId] = 1;
            }
            if(token){
                
            }
        },
        removeCart: (state, action) => {
            const itemId = action.payload;
            if (state.cartItem[itemId] > 1) {
                state.cartItem[itemId] -= 1;
            } else {
                delete state.cartItem[itemId];
            }
        }
    }
});

// export const totalAmount = (state) => {
//     let totalPrice = 0;

//     for (let item in state.cart.cartItem) {
//         console.log(item);
        
//         if (state.cart.cartItem[item] > 0) {
//             let itemInfo = food_list.find((product) => product._id == item);
//             console.log('itmeinfo',itemInfo)
//             if (itemInfo) {
//                 totalPrice += itemInfo.price * state.cart.cartItem[item];
//             } else {
//                 console.warn(`Item with id ${item} not found in food_list.`);
//             }
//         }
//     }

//     return totalPrice;
// };

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
