import {
  combineReducers,
  configureStore,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import { headerSlice } from "./header";
import { loginSlice } from "./login";

const reducer = combineReducers({
  login: loginSlice.reducer,
  header: headerSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const errorMiddleware = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // do something
  }
  return next(action);
};

const middlewareHandler = (getDefaultMiddleware) => {
  const middlewareList = [
    errorMiddleware,
    apiSlice.middleware,
    ...getDefaultMiddleware(),
  ];

  return middlewareList;
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});
