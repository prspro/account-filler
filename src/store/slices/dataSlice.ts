import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDataSlice {
  fieldList: {
    id: string;
    label: string;
    value: string;
  }[];
}

const initialState: IDataSlice = {
  fieldList: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFieldItem: (
      state,
      action: PayloadAction<{ id: string; value: string; label: string }>
    ) => {
      if (!state.fieldList.find((entry) => entry.id === action.payload.id)) {
        state.fieldList.push({
          id: action.payload.id,
          label: action.payload.label,
          value: action.payload.value,
        });
      } else {
        state.fieldList = state.fieldList.map((entry) =>
          entry.id === action.payload.id
            ? { id: entry.id, label: entry.label, value: action.payload.value }
            : entry
        );
      }
    },
    removeFieldItem: (state, action: PayloadAction<string>) => {
      if (state.fieldList.length > 0) {
        state.fieldList = state.fieldList.filter(
          (entry) => entry.id !== action.payload
        );
      }
    },
    updateFieldItem: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      state.fieldList = state.fieldList.map((entry) =>
        entry.id === action.payload.id
          ? { id: entry.id, label: entry.label, value: action.payload.value }
          : entry
      );
    },
  },
});

export const { addFieldItem, removeFieldItem, updateFieldItem } =
  dataSlice.actions;
export default dataSlice.reducer;
