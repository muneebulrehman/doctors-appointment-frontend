import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
  doctor: {},
  loading: false,
  error: ""
};

export const fetchDoctors = createAsyncThunk("user/fetchDoctors", async () => {
  const response = await fetch(
    "https://doctors-appointment-backend.herokuapp.com/api/doctors"
  );
  const doctors = await response.json();
  return doctors;
});

export const fetchSingleDoctor = createAsyncThunk(
  "user/fetchSingleDoctor",
  async (id) => {
    const response = await fetch(
      `https://doctors-appointment-backend.herokuapp.com/api/doctors/${id}`
    );
    const doctor = await response.json();
    return doctor;
  }
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDoctors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.doctors = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchDoctors.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.doctors = [];
    });
    builder.addCase(fetchSingleDoctor.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleDoctor.fulfilled, (state, action) => {
      state.doctor = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchSingleDoctor.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.doctor = {};
    });
  }
});

export default doctorSlice.reducer;
