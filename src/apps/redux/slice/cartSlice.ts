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
  },
});
export const { setProdctCart } = cartSlice.actions;

export default cartSlice.reducer;
