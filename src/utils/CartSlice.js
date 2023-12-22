import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            // returns new state
            return state.filter(e => e.id !== action.payload);
        }
    }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;

