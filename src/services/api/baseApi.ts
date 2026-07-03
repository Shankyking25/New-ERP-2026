// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({
//   baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
//   credentials: "include",
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem("accessToken");

//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }

//     return headers;
//   },
// });

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery,
//   tagTypes: ["Auth", "User"],
//   endpoints: () => ({}),
// });



import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: axiosBaseQuery(),

  tagTypes: [
    "Auth",
    "Users",
    "Employees",
    "Roles",
    "Profile",
    "Dashboard",
    "Reports",
    "Notifications",
  ],

  endpoints: () => ({}),
});

