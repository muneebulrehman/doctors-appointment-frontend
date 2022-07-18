import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    navMenuIsOpen: false,
    lightModeIsOn: false,
    mobileMode: true,
    backButtonVisible: false,
  },
  reducers: {
    toggleNavMenu(state) {
      state.navMenuIsOpen = !state.navMenuIsOpen;
    },
    setLightMode(state, action) {
      state.lightModeIsOn = action.payload;
    },
    setMobileMode(state, action) {
      state.mobileMode = action.payload;
    },
    setBackButton(state, action) {
      state.backButtonVisible = action.payload;
    },
  },
});

export const { toggleNavMenu, setLightMode, setMobileMode, setBackButton } =
  layoutSlice.actions;
export default layoutSlice.reducer;
