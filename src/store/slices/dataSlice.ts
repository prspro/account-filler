import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IDataSlice {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
}

const initialState: IDataSlice = {
  login: "",
  password: "",
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    refreshLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    refreshPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    refreshFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    refreshLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    refreshEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    refreshDateOfBirth: (state, action: PayloadAction<string>) => {
      state.dateOfBirth = action.payload;
    },
  },
});

export const {
  refreshLogin,
  refreshPassword,
  refreshFirstName,
  refreshLastName,
  refreshEmail,
  refreshDateOfBirth,
} = dataSlice.actions;
export default dataSlice.reducer;
