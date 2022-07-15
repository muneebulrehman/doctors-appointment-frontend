import { configureStore } from '@reduxjs/toolkit';

import doctorReducer from '../features/doctor/doctorSlice';
import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer,
  },
});

export default store;
