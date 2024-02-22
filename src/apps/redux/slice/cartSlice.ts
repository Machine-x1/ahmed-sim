/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type PopupState = {
  cart: {
    products: any[];
  };
};

const initialState: PopupState = {
  cart: {
    products: [],
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProdctCart: (state, action: PayloadAction<any>) => {
      const { products } = state.cart;
      const existingProduct = products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.purchased_quantity += 1;
      } else {
        // state.cart.products.splice(existingProduct, 1);
        products.push({ ...action.payload, purchased_quantity: 1 }); // Assign initial quantity as 1
      }
    },

    deleteProductCart: (state, action: PayloadAction<string>) => {
      const productIdToDelete = action.payload;
      const updatedProducts = state.cart.products.filter(
        (product) => product._id !== productIdToDelete
      );
      state.cart.products = updatedProducts;
    },

    increaseQuantity: (state, action) => {
      const { products } = state.cart;
      const existingProduct = products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.purchased_quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const { products } = state.cart;
      const existingProduct = products.find(
        (product) => product._id === action.payload._id
      );

      if (existingProduct && existingProduct.purchased_quantity > 1) {
        existingProduct.purchased_quantity -= 1;
      }
    },
  },
});
export const {
  setProdctCart,
  deleteProductCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
