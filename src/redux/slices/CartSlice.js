import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
};
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearAllIrtems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllIrtems } = cart.actions;
export default cart.reducer;
