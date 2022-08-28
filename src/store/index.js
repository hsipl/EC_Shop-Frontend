import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { loginSlice } from "./login";

const reducer = combineReducers({
  login: loginSlice.reducer,
});

const errorMiddleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // do something
  }
  return next(action);
};

const middlewareHandler = (getDefaultMiddleware) => {
  const middlewareList = [errorMiddleware, ...getDefaultMiddleware()];

  return middlewareList;
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});
