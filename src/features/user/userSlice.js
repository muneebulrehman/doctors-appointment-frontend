import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getCookie } from '../../util/cookies';

const url = 'https://doctors-appointment-backend.herokuapp.com/api/';

const initialState = {
  user: null,
  loading: false,
  error: ''
};

export const createUser = createAsyncThunk('user/createUser', async (user) => {
  const response = await fetch(url + 'users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk('user/login', async (user) => {
  const response = await fetch(url + 'auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
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
      getCookie();
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  }
});
