import { createSlice } from "@reduxjs/toolkit";

import { getProducts, getProductById } from "../../actions/postApi";

const initialState = {
  products: [],
  product: null,
  basketProducts: null,
};

export const shopAllSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setBasketProducts: (state, action) => {
      state.basketProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const { reducer, actions } = shopAllSlice;
