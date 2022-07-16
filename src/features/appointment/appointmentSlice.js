import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: { doctorId: '', date: null, pending: false },
  reducers: {
    setDoctorId: (state, action) => {
      state.doctorId = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setPending: (state, action) => {
      state.pending = action.payload;
    },
  },
});

export const { setDoctorId, setDate, setPending } = appointmentSlice.actions;
export default appointmentSlice.reducer;
