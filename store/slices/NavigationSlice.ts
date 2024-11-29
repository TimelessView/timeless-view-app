import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: `navigation-slice`,
  initialState: {
    // define some initial values for your app
    // e.g. counter: 0,
    navigationOpen: false
  },
  // here, by using createSlice method,
  // in reducers we specify the functions that would be
  // accessible, We do not need to write boilerplate if checks code
  reducers: {
    toggleNavigation(state, action: PayloadAction<boolean>) {
      state.navigationOpen = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const navigationSliceActions
  = navigationSlice.actions;
export default navigationSlice.reducer;
