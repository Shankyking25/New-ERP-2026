// import { baseApi } from "../../../services/api/baseApi";

// export const payrollApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({

//     getPayrolls: builder.query({
//       query: (params) => ({
//         url: "/payroll",
//         params,
//       }),
//       providesTags: ["Payroll"],
//     }),

// /* GET ONE */
//     getPayroll: builder.query({
//       query: (id) => `/payroll/${id}`,
//     }),

// /* CREATE */
//     addPayroll: builder.mutation({
//       query: (body) => ({
//         url: "/payroll",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Payroll"],
//     }),

// /* UPDATE */
//     updatePayroll: builder.mutation({
//       query: ({ id, body }) => ({
//         url: `/payroll/${id}`,
//         method: "PUT",
//         body,
//       }),
//       invalidatesTags: ["Payroll"],
//     }),

// /* DELETE */
//     deletePayroll: builder.mutation({
//       query: (id) => ({
//         url: `/payroll/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Payroll"],
//     }),

//   }),
// });

// export const {

//   useGetPayrollsQuery,
//   useGetPayrollQuery,
//   useAddPayrollMutation,
//   useUpdatePayrollMutation,
//   useDeletePayrollMutation,

// } = payrollApi;




import { baseApi } from "../../../services/api/baseApi";

export const payrollApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getPayrolls: builder.query({
      query: (params) => ({
        url: "/payroll",
        method: "GET",
        params,
      }),
      providesTags: ["Payroll"],
    }),

    getPayroll: builder.query({
      query: (id) => ({
        url: `/payroll/${id}`,
        method: "GET",
      }),
    }),

    addPayroll: builder.mutation({
      query: (body) => ({
        url: "/payroll",
        method: "POST",
        data: body,      // ✅ FIXED
      }),
      invalidatesTags: ["Payroll"],
    }),

    updatePayroll: builder.mutation({
      query: ({ id, body }) => ({
        url: `/payroll/${id}`,
        method: "PUT",
        data: body,      // ✅ FIXED
      }),
      invalidatesTags: ["Payroll"],
    }),

    deletePayroll: builder.mutation({
      query: (id) => ({
        url: `/payroll/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payroll"],
    }),

  }),
});

export const {
  useGetPayrollsQuery,
  useGetPayrollQuery,
  useAddPayrollMutation,
  useUpdatePayrollMutation,
  useDeletePayrollMutation,
} = payrollApi;