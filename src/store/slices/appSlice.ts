import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppSlice {
  isDataGenerated: boolean;
  isOverlayShown: boolean;
}

const initialState: IAppSlice = {
  isDataGenerated: false,
  isOverlayShown: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    ///overlay
    showOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = true;
    },
    hideOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = false;
    },
    toggleOverlay: (state, action: PayloadAction<void>) => {
      state.isOverlayShown = !state.isOverlayShown;
    },
    ///isDataGenerated
    toggleIsDataGenerated: (state, action: PayloadAction<void>) => {
      state.isDataGenerated = !state.isDataGenerated;
    },
  },
});

export const {
  showOverlay,
  hideOverlay,
  toggleOverlay,
  toggleIsDataGenerated,
} = appSlice.actions;
export default appSlice.reducer;
