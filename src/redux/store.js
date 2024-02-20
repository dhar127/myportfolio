import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js';

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware, enhancers, and other configurations here if needed
});

export default store;
