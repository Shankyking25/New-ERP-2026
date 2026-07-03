// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Box } from "@mui/material";
// import Logins from  "./features/auth/pages/Login";

// import Register from "./features/auth/pages/Register";
// import ForgotPassword from "./features/auth/pages/ForgotPassword";


// export default function App() {
//   const isAuthenticated = false;

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Logins />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />

//         <Route
//           path="/"
//           element={
//             isAuthenticated ? <Home /> : <Navigate to="/login" />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }



import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";

import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import VerifyOtp from "./features/auth/pages/VerifyOtp";
import ResetPassword from "./features/auth/pages/ResetPassword";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Home from "./features/dashboard/pages/Home";
import Employees from "./features/employees/pages/Employees";
import AppLayout from "./layouts/AppLayout";
import EmployeeDetails from "./features/employees/pages/EmployeeDetails";

import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { loadUserFromStorage } from "./features/auth/utils/authLoader";

import Departments from "./features/departments/pages/Departments";
import Attendance from "./features/attendence/pages/Attendance";
import Leave from "./features/leave/pages/Leave";

import Payroll from "./features/payroll/pages/Payroll";


export default function App() {
  
  const dispatch = useAppDispatch();

useEffect(() => {
  loadUserFromStorage(dispatch);
}, []);


  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

<Route
path="/verify-otp"
element={<VerifyOtp/>}
/>


<Route
  path="/reset-password"
  element={<ResetPassword />}
/>

        <Route
          path="/"
          element={
            isAuthenticated
              ? <Home />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>     */}

<Routes>

  <Route
    path="/login"
    element={
      <PublicRoute>
        <Login />
      </PublicRoute>
    }
  />

  <Route
    path="/register"
    element={
      <PublicRoute>
        <Register />
      </PublicRoute>
    }
  />

  <Route
    path="/forgot-password"
    element={
      <PublicRoute>
        <ForgotPassword />
      </PublicRoute>
    }
  />

  <Route
    path="/verify-otp"
    element={
      <PublicRoute>
        <VerifyOtp />
      </PublicRoute>
    }
  />

  <Route
    path="/reset-password"
    element={
      <PublicRoute>
        <ResetPassword />
      </PublicRoute>
    }
  />




<Route
  path="/employees"
  element={
    <ProtectedRoute>
      <AppLayout>
        <Employees />
      </AppLayout>
    </ProtectedRoute>
  }
/>



<Route
  path="/employees/:id"
  element={
    <ProtectedRoute>
      <AppLayout>
        <EmployeeDetails />
      </AppLayout>
    </ProtectedRoute>
  }
/>





<Route
path="/departments"
element={
<ProtectedRoute>
<AppLayout>
<Departments/>
</AppLayout>
</ProtectedRoute>
}
/>




<Route
  path="/attendance"
  element={
    <ProtectedRoute>
      <AppLayout>
        <Attendance />
      </AppLayout>
    </ProtectedRoute>
  }
/>



<Route
  path="/leave"
  element={
    <ProtectedRoute>
      <AppLayout>
        <Leave />
      </AppLayout>
    </ProtectedRoute>
  }
/>



<Route
  path="/payroll"
  element={
    <ProtectedRoute>
      <AppLayout>
        <Payroll />
      </AppLayout>
    </ProtectedRoute>
  }
/>



<Route
  path="/"
  element={
    <ProtectedRoute>
      <AppLayout>
        <Home />
      </AppLayout>
    </ProtectedRoute>
  }
/>

</Routes>

    </BrowserRouter> 
  );
}



