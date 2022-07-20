import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const loginLogoutSlice = createSlice({
  name: 'loginLogout',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export default loginLogoutSlice.reducer;

export const { setUser, resetUser } = loginLogoutSlice.actions;
