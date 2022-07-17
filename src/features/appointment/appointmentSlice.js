import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: {
    doctorId: '',
    date: null,
    pending: false,
    slidePointer: 0,
    slideAmountToShow: 1,
  },
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
    setSlidePointer: (state, action) => {
      state.slidePointer = action.payload;
    },
    setSlideAmountToShow: (state, action) => {
      state.slideAmountToShow = action.payload;
    },
  },
});

export const {
  setDoctorId,
  setDate,
  setPending,
  setSlidePointer,
  setSlideAmountToShow,
} = appointmentSlice.actions;
export default appointmentSlice.reducer;
