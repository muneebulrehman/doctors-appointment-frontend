import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';
import doctorReducer from '../features/doctor/doctorSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
