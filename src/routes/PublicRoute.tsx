// // import { Navigate } from "react-router-dom";

// // interface Props {
// //   children: React.ReactNode;
// // }

// // export default function PublicRoute({
// //   children,
// // }: Props) {

// //   const token = localStorage.getItem("accessToken");

// //   if (token) {
// //     return <Navigate to="/" replace />;
// //   }

// //   return <>{children}</>;
// // }




// import { Navigate } from "react-router-dom";

// import useAuth from "../features/auth/hooks/useAuth";

// interface Props {
//   children: React.ReactNode;
// }

// export default function PublicRoute({
//   children,
// }: Props) {

//   const { isAuthenticated } = useAuth();

//   if (isAuthenticated) {
//     return (
//       <Navigate
//         to="/"
//         replace
//       />
//     );
//   }

//   return <>{children}</>;
// }



import { Navigate } from "react-router-dom";
import useAuth from "../features/auth/hooks/useAuth";

export default function PublicRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}