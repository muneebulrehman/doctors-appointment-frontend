import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://doctors-appointment-backend.herokuapp.com/api';

const initialState = {
  user: null,
  loading: false,
  error: '',
};

export const signUp = createAsyncThunk('user/signUp', async (user) => {
  const response = await fetch(`${url}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    body: JSON.stringify({ user_name: user.name, email: user.email }),
  });
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await fetch(`http://localhost:3000/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_name: user.name }),
  });
  const data = await response.json();
  return data;
});

export const logout = createAsyncThunk('user/logout', async () => {
  const response = await fetch(`${url}/auth`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
      state.user = null;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export default userSlice.reducer;
