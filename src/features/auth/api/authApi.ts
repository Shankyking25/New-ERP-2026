// import { baseApi } from "../../../services/api/baseApi";

// import type {
//   LoginRequest,
//   LoginResponse,
// } from "../types/authTypes";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation<LoginResponse, LoginRequest>({
//       query: (body) => ({
//         url: "/auth/login",

//         method: "POST",

//         data: body,
//       }),
//     }),
//   }),
// });


// export const {
//   useLoginMutation,
// } = authApi;



import { baseApi } from "../../../services/api/baseApi";

import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ForgotPasswordRequest,
ForgotPasswordResponse,
VerifyOtpRequest,
VerifyOtpResponse,
ResetPasswordRequest,
ResetPasswordResponse,
} from "../types/authTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // LOGIN
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        data: body,
      }),
    }),

    // REGISTER
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        data: body,
      }),
    }),


    // FORGOT PASSWORD
    forgotPassword: builder.mutation<
ForgotPasswordResponse,
ForgotPasswordRequest
>({
    query:(body)=>({
        url:"/auth/forgot-password",
        method:"POST",
        data:body,
    }),
}),

verifyOtp: builder.mutation<
VerifyOtpResponse,
VerifyOtpRequest
>({
    query:(body)=>({
        url:"/auth/verify-otp",
        method:"POST",
        data:body,
    }),
}),

resetPassword: builder.mutation<
ResetPasswordResponse,
ResetPasswordRequest
>({
    query:(body)=>({
        url:"/auth/reset-password",
        method:"POST",
        data:body,
    }),
}),

  }),
});

export const {
useLoginMutation,
useRegisterMutation,
useForgotPasswordMutation,
useVerifyOtpMutation,
useResetPasswordMutation,
}=authApi;