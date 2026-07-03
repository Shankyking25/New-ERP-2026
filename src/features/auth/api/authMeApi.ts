import { baseApi } from "../../../services/api/baseApi";

export const authMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetMeQuery,
} = authMeApi;