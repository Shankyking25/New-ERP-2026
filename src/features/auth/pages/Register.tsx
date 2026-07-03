import {
  Box,
  Typography,
  Paper,
  Stack,
  useMediaQuery,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

import { Link as RouterLink } from "react-router-dom";

import AppButton from "../../../components/common/AppButton";
import AppTextField from "../../../components/common/AppTextField";
import AppPasswordField from "../../../components/common/AppPasswordField";
import { authPageStyles } from "../../../styles/globalStyles";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterSchemaType,
} from "../schemas/registerSchema";

import { useRegisterMutation } from "../api/authApi";

import axiosInstance from "../../../services/api/axiosInstance";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSnackbar from "../../../components/common/AppSnackbar";


console.log("BASE URL:", axiosInstance.defaults.baseURL);

export default function Register() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [registerUser, { isLoading }] = useRegisterMutation();


  const navigate = useNavigate();

const [snackbar, setSnackbar] = useState({
  open: false,
  message: "",
  severity: "success" as
    | "success"
    | "error"
    | "warning"
    | "info",
});



const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<RegisterSchemaType>({
  resolver: zodResolver(registerSchema),
});




// const onSubmit = async (data: RegisterSchemaType) => {
//   try {
//     const payload = {
//       name: data.name,
//       email: data.email,
//       mobile: data.mobile,
//       password: data.password,
//       role: "employee",
//     };

//     console.log("Sending Payload");
//     console.log(payload);

//     const response = await registerUser(payload);

//     console.log("RAW RESPONSE");
//     console.log(response);

//     if ("data" in response) {
//       console.log("SUCCESS");
//       console.log(response.data);
//     }

//     if ("error" in response) {
//       console.log("ERROR");
//       console.log(response.error);
//     }
//   } catch (err) {
//     console.log("Catch Block");
//     console.log(err);
//   }
// };




const onSubmit = async (data: RegisterSchemaType) => {
  try {
    const response = await registerUser({
      name: data.name,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
      role: "employee",
    }).unwrap();

    setSnackbar({
      open: true,
      message: response.message,
      severity: "success",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  } catch (error: any) {
    setSnackbar({
      open: true,
      message:
        error?.data?.message || "Registration Failed",
      severity: "error",
    });
  }
};




  return (
    <Box sx={authPageStyles.container}>
      <Paper
        elevation={8}
        sx={{
          width: isMobile ? "100%" : 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ textAlign: "center" }}
        >
          ERP System Register
        </Typography>

        <Typography
          variant="body2"
          
          sx={{ opacity: 0.7, mb: 3 , textAlign: "center" }}
        >
          Create your account to continue
        </Typography>

     
     <form
  onSubmit={(e) => {
    console.log("FORM SUBMITTED");
    handleSubmit(onSubmit)(e);
  }}
>

             <Stack spacing={2}>
          <AppTextField
  label="Full Name"
  {...register("name")}
/> {errors.name && (
  <Typography color="error" sx={{ fontSize: 12 }}>
    {errors.name.message}
  </Typography>
)}
          <AppTextField
  label="Email"
  type="email"
  {...register("email")}
/>

{errors.email && (
  <Typography color="error" sx={{ fontSize: 12 }}>
    {errors.email.message}
  </Typography>
)}

          <AppTextField
  label="Mobile Number"
  {...register("mobile")}
/>

{errors.mobile && (
  <Typography color="error" sx={{ fontSize: 12 }}>
    {errors.mobile.message}
  </Typography>
)}

          <AppPasswordField
  label="Password"
  {...register("password")}
/>

{errors.password && (
  <Typography color="error" sx={{ fontSize: 12 }}>
    {errors.password.message}
  </Typography>
)}
          <AppPasswordField
  label="Confirm Password"
  {...register("confirmPassword")}
/>

{errors.confirmPassword && (
  <Typography color="error" sx={{ fontSize: 12 }}>
    {errors.confirmPassword.message}
  </Typography>
)}
        

     <AppButton
  fullWidth
  type="submit"
  disabled={isLoading}
>
  {isLoading ? "Creating Account..." : "Register"}
</AppButton>


          <Typography sx={{ textAlign: "center" }}>
            OR
          </Typography>

          <AppButton
            fullWidth
            type="button"
          >
            <GoogleIcon sx={{ mr: 1 }} />
            Continue with Google
          </AppButton>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 0.5,
              mt: 2,
            }}
          >
            <LoginIcon
              fontSize="small"
              color="primary"
            />

            <Typography variant="body2">
              Already have an account?
            </Typography>

            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
            >
              Login
            </Link>
          </Box>
        </Stack>
        </form>
      </Paper>


<AppSnackbar
  open={snackbar.open}
  message={snackbar.message}
  severity={snackbar.severity}
  onClose={() =>
    setSnackbar({
      ...snackbar,
      open: false,
    })
  }
/>


    </Box>
  );
}