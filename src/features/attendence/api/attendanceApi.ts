// import { baseApi } from "../../../services/api/baseApi";

// export const attendanceApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({

//     getAttendances: builder.query({

//       query: (params) => ({
//         url: "/attendance",
//         params,
//       }),

//       providesTags: ["Attendance"],

//     }),

//     getAttendance: builder.query({

//       query: (id) => `/attendance/${id}`,

//       providesTags: ["Attendance"],

//     }),

//     addAttendance: builder.mutation({

//       query: (body) => ({
//         url: "/attendance",
//         method: "POST",
//         body,
//       }),

//       invalidatesTags: ["Attendance"],

//     }),

//     updateAttendance: builder.mutation({

//       query: ({ id, body }) => ({
//         url: `/attendance/${id}`,
//         method: "PUT",
//         body,
//       }),

//       invalidatesTags: ["Attendance"],

//     }),

//     deleteAttendance: builder.mutation({

//       query: (id) => ({
//         url: `/attendance/${id}`,
//         method: "DELETE",
//       }),

//       invalidatesTags: ["Attendance"],

//     }),

//     attendanceStats: builder.query({

//       query: () => "/attendance/stats",

//       providesTags: ["Attendance"],

//     }),

//   }),

// });

// export const {

//   useGetAttendancesQuery,

//   useGetAttendanceQuery,

//   useAddAttendanceMutation,

//   useUpdateAttendanceMutation,

//   useDeleteAttendanceMutation,

//   useAttendanceStatsQuery,

// } = attendanceApi;



import { baseApi } from "../../../services/api/baseApi";

import type {
  Attendance,
  AttendanceListResponse,
  AttendanceRequest,
  AttendanceResponse,
} from "../types/attendanceTypes";

export const attendanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ==========================
    // GET ALL
    // ==========================
    getAttendances: builder.query<
      AttendanceListResponse,
      {
        page?: number;
        limit?: number;
        search?: string;
        employee?: string;
        status?: string;
      }
    >({
      query: (params) => ({
        url: "/attendance",
        method: "GET",
        params,
      }),

      providesTags: ["Attendance"],
    }),

    // ==========================
    // GET ONE
    // ==========================
    getAttendanceById: builder.query<
      Attendance,
      string
    >({
      query: (id) => ({
        url: `/attendance/${id}`,
        method: "GET",
      }),
    }),

    // ==========================
    // CREATE
    // ==========================
    createAttendance: builder.mutation<
      AttendanceResponse,
      AttendanceRequest
    >({
      query: (body) => ({
        url: "/attendance",
        method: "POST",
        data: body,
      }),

      invalidatesTags: ["Attendance"],
    }),

    // ==========================
    // UPDATE
    // ==========================
    updateAttendance: builder.mutation<
      AttendanceResponse,
      {
        id: string;
        body: AttendanceRequest;
      }
    >({
      query: ({ id, body }) => ({
        url: `/attendance/${id}`,
        method: "PUT",
        data: body,
      }),

      invalidatesTags: ["Attendance"],
    }),

    // ==========================
    // DELETE
    // ==========================
    deleteAttendance: builder.mutation<
      { success: boolean },
      string
    >({
      query: (id) => ({
        url: `/attendance/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Attendance"],
    }),

    // ==========================
    // STATS
    // ==========================
    getAttendanceStats: builder.query<
      any,
      void
    >({
      query: () => ({
        url: "/attendance/stats",
        method: "GET",
      }),

      providesTags: ["Attendance"],
    }),

  }),
});

export const {
  useGetAttendancesQuery,
  useGetAttendanceByIdQuery,
  useCreateAttendanceMutation,
  useUpdateAttendanceMutation,
  useDeleteAttendanceMutation,
  useGetAttendanceStatsQuery,
} = attendanceApi;