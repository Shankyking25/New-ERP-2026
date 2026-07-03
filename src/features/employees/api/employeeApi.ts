// import { baseApi } from "../../../services/api/baseApi";

// import type {
//   EmployeeResponse,
//   EmployeeSingleResponse,
//   CreateEmployeeRequest,
// } from "../types/employeeTypes";

// export const employeeApi =
//   baseApi.injectEndpoints({

//     endpoints: (builder) => ({

//       getEmployees: builder.query<
//         EmployeeResponse,
//         void
//       >({

//         query: () => ({
//           url: "/employees",
//           method: "GET",
//         }),

//         providesTags: ["Employees"],

//       }),

//       getEmployee: builder.query<
//         EmployeeSingleResponse,
//         string
//       >({

//         query: (id) => ({
//           url: `/employees/${id}`,
//           method: "GET",
//         }),

//       }),

//       createEmployee: builder.mutation<
//         EmployeeSingleResponse,
//         CreateEmployeeRequest
//       >({

//         query: (body) => ({
//           url: "/employees",
//           method: "POST",
//           data: body,
//         }),

//         invalidatesTags: ["Employees"],

//       }),

//     }),

// });

// export const {

//   useGetEmployeesQuery,

//   useGetEmployeeQuery,

//   useCreateEmployeeMutation,

// } = employeeApi;




import { baseApi } from "../../../services/api/baseApi";

import type {
  Employee,
  EmployeeListResponse,
  EmployeeRequest,
  EmployeeResponse,
} from "../types/employeeTypes";

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    
    
    // ==========================
    // GET ALL EMPLOYEES
    // ==========================
    getEmployees: builder.query<
      EmployeeListResponse,
      {
        page?: number;
        limit?: number;
        search?: string;
        department?: string;
        status?: string;
      }
    >({
      query: (params) => ({
        url: "/employees",
        method: "GET",
        params,
      }),

      providesTags: ["Employees"],
    }),

    // ==========================
    // GET SINGLE EMPLOYEE
    // ==========================
    getEmployeeById: builder.query<
      Employee,
      string
    >({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "GET",
      }),
    }),

    // ==========================
    // CREATE EMPLOYEE
    // ==========================
    
    
    // createEmployee: builder.mutation<
    //   EmployeeResponse,
    //   EmployeeRequest
    // >({
    //   query: (body) => ({
    //     url: "/employees",
    //     method: "POST",
    //     data: body,
    //   }),

    //   invalidatesTags: ["Employees"],
    // }),

    // // ==========================
    // // UPDATE EMPLOYEE
    // // ==========================
    // updateEmployee: builder.mutation<
    //   EmployeeResponse,
    //   {
    //     id: string;
    //     body: EmployeeRequest;
    //   }
    // >({
    //   query: ({ id, body }) => ({
    //     url: `/employees/${id}`,
    //     method: "PUT",
    //     data: body,
    //   }),

    //   invalidatesTags: ["Employees"],
    // }),



    createEmployee: builder.mutation({
  query: (body) => ({
    url: "/employees",
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  invalidatesTags: ["Employees"],
}),

updateEmployee: builder.mutation({
  query: ({ id, body }) => ({
    url: `/employees/${id}`,
    method: "PUT",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  invalidatesTags: ["Employees"],
}),




    // ==========================
    // DELETE EMPLOYEE
    // ==========================
    deleteEmployee: builder.mutation<
      { success: boolean },
      string
    >({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Employees"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;



