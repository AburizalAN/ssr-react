import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { axiosInstanceClient, axiosInstanceServer } from '../config/axios';

export const storeServer = (req) => {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstanceServer(req)
        }
      })
  })
}

export const storeClient = (initialState) => {
  return configureStore({
    reducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstanceClient,
        }
      })
  })
}