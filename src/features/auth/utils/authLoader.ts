import { setUser, loginSuccess } from "../slices/authSlice";
import axiosInstance from "../../../services/api/axiosInstance";

export const loadUserFromStorage = async (dispatch: any) => {
  const token = localStorage.getItem("accessToken");

  const user = localStorage.getItem("user");

  if (!token) return;

  try {
    // If user exists in localStorage
    if (user) {
      dispatch(
        setUser(JSON.parse(user))
      );
      return;
    }

    // Optional: verify token with backend
    const res = await axiosInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(
      loginSuccess({
        user: res.data.user,
        accessToken: token,
      })
    );

  } catch (error) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  }
};