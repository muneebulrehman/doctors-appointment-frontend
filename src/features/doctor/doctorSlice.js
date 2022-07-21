import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import config from '../../config';
import routes from '../../routesApi';

const initialState = {
  doctors: [],
  doctor: {},
  loading: false,
};

export const fetchDoctors = createAsyncThunk(`user/fetchDoctors`, async () => {
  const response = await fetch(`${config.url}${routes.DOCTOR}`, {
    mode: 'no-cors',
  });
  const doctors = await response.json();
  return doctors;
});

export const fetchSingleDoctor = createAsyncThunk(
  'user/fetchSingleDoctor',
  async (id) => {
    const response = await fetch(`${config.url}${routes.DOCTOR_ID}${id}`, {
      mode: 'no-cors',
    });
    const doctor = await response.json();
    return doctor;
  }
);

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.doctors = action.payload;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchSingleDoctor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleDoctor.fulfilled, (state, action) => {
      state.doctor = action.payload;
      state.loading = false;
      state.error = '';
    });
  },
});

export default doctorSlice.reducer;
