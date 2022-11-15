import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import dataSlice from "./slices/dataSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
