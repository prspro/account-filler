import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isDataGenerated: false,
  isOverlayShown: false,
};

const overlaySlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = true;
    },
    hideOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = false;
    },
    toggleOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = !state.isOverlayShown;
    },
    ///
    toggleIsDataGenerated: (state, action: PayloadAction<void>) => {
        state.isDataGenerated = !state.isDataGenerated;
    },
  },
});

export const { showOverlay, hideOverlay, toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
