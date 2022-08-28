import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

export const storeServer = configureStore({ reducer })
export const storeClient = (initialState) => {
  return configureStore({
    reducer,
    preloadedState: initialState
  })
}