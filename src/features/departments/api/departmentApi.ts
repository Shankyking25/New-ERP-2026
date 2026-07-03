// import { baseApi } from "../../../services/api/baseApi";

// export const departmentApi =
//   baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//       getDepartments: builder.query({
//         query: () => ({
//           url: "/departments",
//           method: "GET",
//         }),
//         providesTags: ["Departments"],
//       }),

//       createDepartment: builder.mutation({
//         query: (body) => ({
//           url: "/departments",
//           method: "POST",
//           data: body,
//         }),
//         invalidatesTags: ["Departments"],
//       }),

//       updateDepartment: builder.mutation({
//         query: ({ id, body }) => ({
//           url: `/departments/${id}`,
//           method: "PUT",
//           data: body,
//         }),
//         invalidatesTags: ["Departments"],
//       }),

//       deleteDepartment: builder.mutation({
//         query: (id) => ({
//           url: `/departments/${id}`,
//           method: "DELETE",
//         }),
//         invalidatesTags: ["Departments"],
//       }),
//     }),
//   });

// export const {
//   useGetDepartmentsQuery,
//   useCreateDepartmentMutation,
//   useUpdateDepartmentMutation,
//   useDeleteDepartmentMutation,
// } = departmentApi;


import { baseApi } from "../../../services/api/baseApi";

import type {
  DepartmentResponse,
  DepartmentPayload,
  DepartmentQuery,
} from "../types/departmentTypes";

export const departmentApi =
  baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getDepartments: builder.query<
        DepartmentResponse,
        DepartmentQuery
      >({
        query: (params) => ({
          url: "/departments",
          method: "GET",
          params,
        }),

        providesTags: ["Department"],
      }),

      addDepartment: builder.mutation({
        query: (body: DepartmentPayload) => ({
          url: "/departments",
          method: "POST",
          data: body,
        }),

        invalidatesTags: ["Department"],
      }),

      updateDepartment: builder.mutation({
        query: ({
          id,
          body,
        }: {
          id: string;
          body: DepartmentPayload;
        }) => ({
          url: `/departments/${id}`,
          method: "PUT",
          data: body,
        }),

        invalidatesTags: ["Department"],
      }),

      deleteDepartment: builder.mutation({
        query: (id: string) => ({
          url: `/departments/${id}`,
          method: "DELETE",
        }),

        invalidatesTags: ["Department"],
      }),
    }),
  });

export const {
  useGetDepartmentsQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;