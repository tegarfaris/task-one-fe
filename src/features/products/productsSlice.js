import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const productsSlice = createSlice({
  name: "products",
  initialState: { items: [] },
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };
      state.items.push(product);
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, clearAll } = productsSlice.actions;
export default productsSlice.reducer;
