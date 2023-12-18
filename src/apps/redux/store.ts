/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FLUSH,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REHYDRATE,
} from 'redux-persist';
// import createWebStorage from 'redux-persist/es/storage/createWebStorage';
// import { WebStorage } from 'redux-persist/es/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import storage from 'redux-persist/lib/storage';

import cartSlice from './slice/cartSlice';
import counterReducer from './slice/counterSlice';
import popupSlice from './slice/popupSlice';

// import rootReducer from './reducers'

const reducers = combineReducers({
  counter: counterReducer,
  popup: popupSlice,
  cart: cartSlice,
});

// export function createPersistStore():WebStorage {

//   const isServer = typeof window === 'undefined';

//   if(isServer) {
//     return{
//       getItem() {
//         return Promise.resolve(null)
//       },
//       setItem() {
//         return Promise.resolve()
//       },
//       removeItem() {
//         return Promise.resolve()
//       },

//     }
//   }
//   else {
//     return createWebStorage('local')
//   }

// }

const persistConfig = {
  key: 'root',
  // version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, FLUSH, PURGE],
      },
    }),
});

// let store = createStore(persistedReducer)
export const persistor = persistStore(store);

//   return { store, persistor }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
