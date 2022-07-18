import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';
import doctorReducer from '../features/doctor/doctorSlice';
import layoutReducer from '../features/layout/layoutSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    layout: layoutReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
