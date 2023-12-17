/* eslint-disable import/no-named-as-default */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {  FLUSH, PERSIST, PURGE, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import cartSlice from './slice/cartSlice';
import counterReducer from './slice/counterSlice';
import popupSlice from './slice/popupSlice';
// import createWebStorage from 'redux-persist/es/storage/createWebStorage';
// import { WebStorage } from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

// import rootReducer from './reducers'

const reducers = combineReducers({
  counter: counterReducer,
  popup: popupSlice,
  cart: cartSlice,
})

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
}
 
const persistedReducer = persistReducer(persistConfig, reducers)



 export const store = configureStore({
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ PERSIST, REHYDRATE, FLUSH,PURGE  ],
      },
    }),
  });

 

// let store = createStore(persistedReducer)
  export let persistor = persistStore(store);
  
//   return { store, persistor }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
