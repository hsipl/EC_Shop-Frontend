import { ERROR } from "@/constant";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    username: "",
    password: "",
  },
  errors: {
    username: "",
    password: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.form = { ...initialState.form };
      state.error = { ...initialState.errors };
    },
    setUsername: (state, action) => {
      const text = action.payload ?? "";
      state.form.username = text;
      const re = /^[a-zA-Z0-9]{4,12}$/g;
      switch (true) {
        case !text:
          state.errors.username = ERROR.isRequired;
          break;
        case !text.match(re):
          state.errors.username = ERROR.isInvalid;
          break;
        default:
          state.errors.username = "";
          break;
      }
    },
    setPassword: (state, action) => {
      const text = action.payload ?? "";
      state.form.password = text;
      const re = /^[a-zA-Z0-9]{4,12}$/g;
      switch (true) {
        case !text:
          state.errors.password = ERROR.isRequired;
          break;
        case !text.match(re):
          state.errors.password = ERROR.isInvalid;
          break;
        default:
          state.errors.password = "";
          break;
      }
    },
  },
});

export const selectForm = (state) => state.login.form;

export const selectErrors = (state) => state.login.errors;

export const { resetForm, setUsername, setPassword } = loginSlice.actions;
