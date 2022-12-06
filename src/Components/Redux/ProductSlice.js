import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});
export const { add, remove } = ProductSlice.actions;
export default ProductSlice.reducer;
