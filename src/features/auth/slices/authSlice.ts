import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    // loginSuccess: (
    //   state,
    //   action: PayloadAction<{
    //     user: User;
    //     accessToken: string;
    //   }>
    // ) => {
    //   state.user = action.payload.user;

    //   state.accessToken =
    //     action.payload.accessToken;

    //   state.isAuthenticated = true;

    //   localStorage.setItem(
    //     "accessToken",
    //     action.payload.accessToken
    //   );
    // },


loginSuccess: (
  state,
  action: PayloadAction<{
    user: User;
    accessToken: string;
  }>
) => {
  state.user = action.payload.user;

  state.accessToken = action.payload.accessToken;

  state.isAuthenticated = true;

  localStorage.setItem(
    "accessToken",
    action.payload.accessToken
  );

  localStorage.setItem(
    "user",
    JSON.stringify(action.payload.user)
  );
},



    // logout: (state) => {
    //   state.user = null;

    //   state.accessToken = null;

    //   state.isAuthenticated = false;

    //   localStorage.removeItem("accessToken");

    logout: (state) => {
  state.user = null;

  state.accessToken = null;

  state.isAuthenticated = false;

  localStorage.removeItem("accessToken");

  localStorage.removeItem("user");
    },

    setUser: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;