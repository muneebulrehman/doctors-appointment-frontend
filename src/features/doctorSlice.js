import { creatSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  doctors: [],
  doctor: {},
  loading: false,
  error: ''
};

export const fetchDoctors = createAsyncThunk('user/fetchDoctors', async () => {
  const response = await fetch('https://doctors-appointment-backend.herokuapp.com/api/doctors');
  const doctors = await response.json();
  return doctors;
});

export const fetchSingleDoctor = createAsyncThunk('user/fetchSingleDoctor', async (id) => {
  const response = await fetch(
    `https://doctors-appointment-backend.herokuapp.com/api/doctors/${id}`
  );
  const doctor = await response.json();
  return doctor;
});
