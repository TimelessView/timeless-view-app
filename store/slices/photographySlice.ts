import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const photographySlice = createSlice({
  name: `photography-slice`,
  initialState: {
    // define some initial values for your app
    // e.g. counter: 0,
    imagery: {
      visible: false,
      image: ``
    }

  },
  // here, by using createSlice method,
  // in reducers we specify the functions that would be
  // accessible, We do nt need to write boilerplate if checks code
  reducers: {
    toggleImageVisibility(state, action: PayloadAction<boolean>) {
      state.imagery.visible = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.imagery.image = action.payload;
    }
  }
});

// here you should export the actions in order for dispatch function to use it
export const photographySliceActions
  = photographySlice.actions;
export default photographySlice.reducer;
