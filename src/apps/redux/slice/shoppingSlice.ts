/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

import type { Product } from '@/apps/interface/types';

export interface StoreState {
  productStore: Product[];
  userInfo: null | string;
  orderData: [];
  productQuantities: { [key: string]: number }; // Object to track quantities by product ID
}

const initialState: StoreState = {
  productStore: [],
  userInfo: null,
  productQuantities: {}, // Object to track quantities by product ID
  orderData: [],
};

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productStore.find(
        (item: Product) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.__v += action.payload.__v;
      } else {
        state.productStore.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productStore.find(
        (item: Product) => item._id === action.payload._id
      );
      existingProduct && existingProduct.__v++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productStore.find(
        (item: Product) => item._id === action.payload._id
      );
      if (existingProduct?.__v === 1) {
        existingProduct.__v === 1;
      } else {
        existingProduct && existingProduct.__v--;
      }
    },
    deleteProduct: (state, action) => {
      state.productStore = state.productStore.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productStore = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteUser: (state) => {
      state.userInfo = null;
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload;
    },
    resetOrder: (state) => {
      state.orderData = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  addUser,
  deleteUser,
  saveOrder,
  resetOrder,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
