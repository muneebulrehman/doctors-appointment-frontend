import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    navMenuIsOpen: false,
    lightModeIsOn: false,
  },
  reducers: {
    toggleNavMenu(state) {
      state.navMenuIsOpen = !state.navMenuIsOpen;
    },
    setLightMode(state, action) {
      state.lightModeIsOn = action.payload;
    },
  },
});

export const { toggleNavMenu, setLightMode } = layoutSlice.actions;
export default layoutSlice.reducer;
