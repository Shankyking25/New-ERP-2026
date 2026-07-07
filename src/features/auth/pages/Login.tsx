import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
//import GoogleIcon from "@mui/icons-material/Google";
import LockResetIcon from "@mui/icons-material/LockReset";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/loginSchema";
import type { LoginSchemaType } from "../schemas/loginSchema";
import AppButton from "../../../components/common/AppButton";
import AppTextField from "../../../components/common/AppTextField";
import AppPasswordField from "../../../components/common/AppPasswordField";
import { authPageStyles } from "../../../styles/globalStyles";

import axiosInstance from "../../../services/api/axiosInstance";
import { useLoginMutation } from "../api/authApi";

import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";


import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../store/hooks";

import { loginSuccess } from "../slices/authSlice";





export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [login, { isLoading }] = useLoginMutation();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginSchemaType>({
  //   resolver: zodResolver(loginSchema),
  // });



console.log(axiosInstance.defaults.baseURL);


const dispatch = useAppDispatch();

const navigate = useNavigate();




const {
    register,
    handleSubmit,
  //  watch,
    formState: { errors },
} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
});

//console.log(watch());





//   const onSubmit = async (
//   data: LoginSchemaType
// ) => {
//    console.log("=========");
//   console.log(data);

// };

const onSubmit = async (
  data: LoginSchemaType
) => {
  try {

    const res = await login({ ...data, rememberMe: false }).unwrap();

    dispatch(
      loginSuccess({
        user: res.user,
        accessToken: res.accessToken,
      })
    );

    navigate("/");

  } catch (err: unknown) {

    alert(
      (err as { data?: { message?: string } })?.data?.message ||
      "Login Failed"
    );

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
        <Typography variant="h5" align="center" sx={{ fontWeight: 700 }}>
          ERP System Login
        </Typography>

        <Typography variant="body2" align="center" sx={{ opacity: 0.7, mb: 3 }}>
          Welcome back! Please login to continue
        </Typography>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <AppTextField
              label="Email"
              {...register("email")}
            />
            {errors.email && (
              <Typography color="error" sx={{ fontSize: 12 }}>
                {errors.email.message}
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


            {/* <AppButton fullWidth type="submit">
              Login
            </AppButton> */}

<AppButton
  fullWidth
  type="submit"
  loading={isLoading}
>
  Login
</AppButton>



<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 1,
    gap: 0.5,
  }}
>
  <PersonAddAlt1Icon
    fontSize="small"
    color="primary"
  />

  <Typography variant="body2">
    Don't have an account?
  </Typography>

  <Link
      component={RouterLink as React.ElementType}
      to="/register"
      underline="hover"
    >
      Register
    </Link>
</Box>




           <Box
  sx={{
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 0.5,
  }}
>
  <LockResetIcon
    fontSize="small"
    sx={{ color: "primary.main" }}
  />

  <Link
    component={RouterLink as React.ElementType}
    to="/forgot-password"
    underline="hover"
    color="primary"
    sx={{ fontSize: 14, fontWeight: 500 }}
  >
    Forgot Password?
  </Link>
</Box>
         {/* <Typography sx={{ textAlign: "center" }}>
  OR
</Typography>

<AppButton fullWidth type="button">
  <GoogleIcon sx={{ mr: 1 }} />
  Continue with Google
</AppButton> */}

<Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 0.5,
    mt: 2,
  }}
>
  <PersonAddAlt1Icon
    fontSize="small"
    color="primary"
  />

  <Typography variant="body2">
    Don't have an account?
  </Typography>

  <Link
    component={RouterLink}
    to="/register"
    underline="hover"
  >
    Register
  </Link>
</Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}