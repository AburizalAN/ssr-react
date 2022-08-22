import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global/reducer';

export default configureStore({
  reducer: {
    global: globalReducer,
  },
})