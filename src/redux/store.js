import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/ProductSlice";
import cartReducer from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export default store;
