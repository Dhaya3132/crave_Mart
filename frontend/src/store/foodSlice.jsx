import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk
export const fetchFood = createAsyncThunk(
    'food/fetchFood', 
    async (_, thunkAPI) => { 
        try {
            const response = await axios.get('http://localhost:5000/api/food/list');
            console.log(response);
            if (response.data.success) {
                return response.data.data;  
            } else {
                return thunkAPI.rejectWithValue('Error: Data not successful');
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
);

// Initial state
const initialState = {
    foodList: [],
    loading: false,
    error: null,
};

// Create the food slice
const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFood.pending, (state) => {
                state.loading = true;    
                state.error = null;     
            })
            .addCase(fetchFood.fulfilled, (state, action) => {
                state.loading = false;   
                state.foodList = action.payload;  
            })
            .addCase(fetchFood.rejected, (state, action) => {
                state.loading = false;   
                state.error = action.payload; 
            });
    },
});

export default foodSlice.reducer;
