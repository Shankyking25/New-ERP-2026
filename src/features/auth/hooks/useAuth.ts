import { useAppSelector } from "../../../store/hooks";

export default function useAuth() {
  const auth = useAppSelector(
    (state) => state.auth
  );

  return {
    user: auth.user,

    accessToken: auth.accessToken,

    isAuthenticated:
      auth.isAuthenticated,
  };
}