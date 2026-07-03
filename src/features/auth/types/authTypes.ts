export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse {
  success: boolean;
  message: string;

  accessToken: string;

  refreshToken: string;

  user: User;
}

export interface User {
  _id: string;

  name: string;

  email: string;

  role: string;

  avatar?: string;
}


export interface RegisterRequest {
  name: string;
  email: string;
  mobile: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;

  user: {
    _id: string;
    name: string;
    email: string;
    mobile: string;
    role: string;
  };
}





export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordRequest {
  email: string;
  otp: string;
  password: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}


