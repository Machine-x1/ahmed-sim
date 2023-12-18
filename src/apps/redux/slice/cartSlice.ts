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
        existingProduct.quantity += 1;
      } else {
        // state.cart.products.splice(existingProduct, 1);
        products.push({ ...action.payload, quantity: 1 }); // Assign initial quantity as 1
      }
    },

    deleteProductCart: (state, action: PayloadAction<string>) => {
      const productIdToDelete = action.payload;
      const updatedProducts = state.cart.products.filter(
        (product) => product._id !== productIdToDelete
      );
      state.cart.products = updatedProducts;
    },

    // increaseQuantity: (state, action) => {
    //   const { products } = state.cart;

    //   const { _id } = action.payload;
    //   const existingProduct = products.find(product => product._id === _id);
    //   if (existingProduct) {
    //     state.cart.products = products.map(product =>
    //       product._id === _id ? { ...product, quantity: product.quantity + 1 } : product
    //     );
    //   }
    // },

    // decreaseQuantity: (state, action) => {
    //   const { products } = state.cart;

    //   const { _id } = action.payload;
    //   const existingProduct = products.find(product => product._id === _id);
    //   if (existingProduct && existingProduct.quantity > 1) {
    //     state.cart.products = products.map(product =>
    //       product._id === _id ? { ...product, quantity: product.quantity - 1 } : product
    //     );
    //   }
    // },
  },
});
export const { setProdctCart, deleteProductCart } = cartSlice.actions;

export default cartSlice.reducer;
