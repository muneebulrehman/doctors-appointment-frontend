import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: { doctorId: '', date: null },
  reducers: {
    setDoctorId: (state, action) => {
      state.doctorId = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setDoctorId, setDate } = appointmentSlice.actions;
export default appointmentSlice.reducer;
