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
      const index = products.findIndex(
        (product) => product._id === action.payload._id
      );

      if (index === -1) {
        state.cart.products.push(action.payload);
      } else {
        state.cart.products.splice(index, 1);
      }
    },
    // deleteProductCart: (state, action: PayloadAction<any>) => {

    // },
    deleteProductCart: (state, action: PayloadAction<string>) => {
      const productIdToDelete = action.payload;
      const updatedProducts = state.cart.products.filter(
        (product) => product._id !== productIdToDelete
      );
      state.cart.products = updatedProducts;
    },
  },
});
export const { setProdctCart, deleteProductCart } = cartSlice.actions;

export default cartSlice.reducer;
