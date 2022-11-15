import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fieldData from "../../data/fieldData";

interface IDataSlice {
  fieldList: {
    id: string;
    label: string;
    value: string;
    isShown: boolean;
  }[];
}

const initialState: IDataSlice = {
  fieldList: fieldData,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addFieldItem: (
      state,
      action: PayloadAction<{
        id: string;
        label: string;
        value: string;
        isShown: boolean;
      }>
    ) => {
      if (!state.fieldList.find((entry) => entry.id === action.payload.id)) {
        state.fieldList.push({
          id: action.payload.id,
          label: action.payload.label,
          value: action.payload.value,
          isShown: action.payload.isShown,
        });
      } else {
        state.fieldList = state.fieldList.map((entry) =>
          entry.id === action.payload.id
            ? {
                ...entry,
                value: action.payload.value,
              }
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
    updateFieldValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>
    ) => {
      state.fieldList = state.fieldList.map((entry) =>
        entry.id === action.payload.id
          ? {
              ...entry,
              value: action.payload.value,
            }
          : entry
      );
    },
    updateFieldisShown: (
      state,
      action: PayloadAction<{ id: string; isShown: boolean }>
    ) => {
      state.fieldList = state.fieldList.map((entry) =>
        entry.id === action.payload.id
          ? {
              ...entry,
              isShown: action.payload.isShown,
            }
          : entry
      );
    },
  },
});

export const {
  addFieldItem,
  removeFieldItem,
  updateFieldValue,
  updateFieldisShown,
} = dataSlice.actions;
export default dataSlice.reducer;
