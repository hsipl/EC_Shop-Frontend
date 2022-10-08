import { apiSlice } from "@/store/api";

const path = "/login";

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginForm) => ({
        url: path,
        method: "POST",
        body: loginForm,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
