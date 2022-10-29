import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuKey: -1,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setMenuKey: (state, action) => {
      const key = action.payload ?? -1;
      state.menuKey = key;
    },
  },
});

export const { setMenuKey } = headerSlice.actions;
