/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slice/counterSlice';
import popupSlice from './slice/popupSlice';
import shoppingSlice from './slice/shoppingSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    popup: popupSlice,
    shoppingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
