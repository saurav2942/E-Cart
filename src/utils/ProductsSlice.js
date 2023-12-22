import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add(state, action) {
      return action.payload;
    },
  },
});

export const { add } = ProductsSlice.actions;
export default ProductsSlice.reducer;
