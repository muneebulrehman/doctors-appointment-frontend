import { configureStore } from '@reduxjs/toolkit';

import doctorReducer from '../features/doctor/doctorSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer
  }
});

export default store;
