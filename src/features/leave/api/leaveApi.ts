import { baseApi } from "../../../services/api/baseApi";

import type {
  Leave,
  LeaveListResponse,
  LeaveRequest,
  LeaveResponse,
} from "../types/leaveTypes";

export const leaveApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // ==========================
    // GET ALL LEAVES
    // ==========================
    getLeaves: builder.query<
      LeaveListResponse,
      {
        page?: number;
        limit?: number;
        search?: string;
        employee?: string;
        status?: string;
      }
    >({
      query: (params) => ({
        url: "/leave",
        method: "GET",
        params,
      }),

      providesTags: ["Leave"],
    }),

    // ==========================
    // GET SINGLE LEAVE
    // ==========================
    getLeaveById: builder.query<
      Leave,
      string
    >({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "GET",
      }),

      providesTags: ["Leave"],
    }),

    // ==========================
    // CREATE
    // ==========================
    createLeave: builder.mutation<
      LeaveResponse,
      LeaveRequest
    >({
      query: (body) => ({
        url: "/leave",
        method: "POST",
        data: body,
      }),

      invalidatesTags: ["Leave"],
    }),

    // ==========================
    // UPDATE
    // ==========================
    updateLeave: builder.mutation<
      LeaveResponse,
      {
        id: string;
        body: LeaveRequest;
      }
    >({
      query: ({ id, body }) => ({
        url: `/leave/${id}`,
        method: "PUT",
        data: body,
      }),

      invalidatesTags: ["Leave"],
    }),

    // ==========================
    // DELETE
    // ==========================
    deleteLeave: builder.mutation<
      { success: boolean },
      string
    >({
      query: (id) => ({
        url: `/leave/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Leave"],
    }),

    // ==========================
    // DASHBOARD STATS
    // ==========================
    getLeaveStats: builder.query<
      any,
      void
    >({
      query: () => ({
        url: "/leave/stats",
        method: "GET",
      }),

      providesTags: ["Leave"],
    }),

  }),
});

export const {

  useGetLeavesQuery,

  useGetLeaveByIdQuery,

  useCreateLeaveMutation,

  useUpdateLeaveMutation,

  useDeleteLeaveMutation,

  useGetLeaveStatsQuery,

} = leaveApi;