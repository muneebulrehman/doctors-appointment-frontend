import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://doctors-appointment-backend.herokuapp.com/api/';

const initialState = {
  user: null,
  loading: false
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
