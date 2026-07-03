// import { Navigate } from "react-router-dom";

// interface Props {
//   children: React.ReactNode;
// }

// export default function ProtectedRoute({
//   children,
// }: Props) {

//   const isAuthenticated = true;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// }










// import {
//   Navigate,
//   Outlet,
// } from "react-router-dom";

// import useAuth from "../features/auth/hooks/useAuth";

// export default function ProtectedRoute() {
//   const { isAuthenticated } =
//     useAuth();

//   if (!isAuthenticated) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//       />
//     );
//   }

//   return <Outlet />;
// }









import { Navigate } from "react-router-dom";

import useAuth from "../features/auth/hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <>{children}</>;
}




