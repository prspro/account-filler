import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppSlice {
  isDataGenerated: boolean;
  isOverlayShown: boolean;
  isMenuShown: boolean,
}

const initialState: IAppSlice = {
  isDataGenerated: false,
  isOverlayShown: false,
  isMenuShown: false,
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
    ///menu
    showMenu: (state, action: PayloadAction<void>) => {
      state.isMenuShown = true;
    },
    hideMenu: (state, action: PayloadAction<void>) => {
      state.isMenuShown = false;
    },
    toggleMenu: (state, action: PayloadAction<void>) => {
      state.isMenuShown = !state.isMenuShown;
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
  showMenu,
  hideMenu,
  toggleMenu,
  toggleIsDataGenerated,
} = appSlice.actions;
export default appSlice.reducer;
