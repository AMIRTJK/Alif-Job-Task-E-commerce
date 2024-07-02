import { configureStore } from "@reduxjs/toolkit";
import { reducer as shopReducer } from "./reducers/Shop/shop.js";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});
