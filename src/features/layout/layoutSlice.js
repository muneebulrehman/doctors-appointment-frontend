import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    navMenuIsOpen: false,
  },
  reducers: {
    toggleNavMenu(state) {
      state.navMenuIsOpen = !state.navMenuIsOpen;
    },
  },
});

export const { toggleNavMenu } = layoutSlice.actions;
export default layoutSlice.reducer;
