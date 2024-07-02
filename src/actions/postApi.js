import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(import.meta.env.VITE_API_PRODUCTS);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "getProductById",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_PRODUCTS}/${id}`
      );
      const data = await response.json();
      dispatch(getProducts());
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

