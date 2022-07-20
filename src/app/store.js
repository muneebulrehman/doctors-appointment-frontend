import { configureStore } from '@reduxjs/toolkit';

import { api } from '../services/api';
import doctorReducer from '../features/doctor/doctorSlice';
import userReducer from '../features/user/userSlice';
import layoutReducer from '../features/layout/layoutSlice';
import appointmentReducer from '../features/appointment/appointmentSlice';
import loginLogoutReducer from '../features/loginlogoutSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer,
    layout: layoutReducer,
    appointment: appointmentReducer,
    [api.reducerPath]: api.reducer,
    loginLogout: loginLogoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
