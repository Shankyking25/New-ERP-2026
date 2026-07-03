import {
  Box,
  Paper,
  Typography,
  Stack,
  Link,
  LinearProgress,
} from "@mui/material";

import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordSchemaType,
} from "../schemas/resetPasswordSchema";

import AppPasswordField from "../../../components/common/AppPasswordField";
import AppButton from "../../../components/common/AppButton";
import AppSnackbar from "../../../components/common/AppSnackbar";

import { authPageStyles } from "../../../styles/globalStyles";

import {
  useTheme,
} from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function ResetPassword() {

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const otp = location.state?.otp;

  const [snackbar, setSnackbar] =
    useState({
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

    watch,

    formState: {
      errors,
    },

  } = useForm<ResetPasswordSchemaType>({
    resolver:
      zodResolver(resetPasswordSchema),
  });

  const password =
    watch("password") || "";

  const getStrength = () => {

    let score = 0;

    if (password.length >= 8)
      score++;

    if (/[A-Z]/.test(password))
      score++;

    if (/[a-z]/.test(password))
      score++;

    if (/[0-9]/.test(password))
      score++;

    if (/@|#|!|\$|%|\^|&|\*/.test(password))
      score++;

    return score * 20;

  };

  const onSubmit = (
    data: ResetPasswordSchemaType
  ) => {

    console.log({
      email,
      otp,
      password: data.password,
    });

    setSnackbar({

      open: true,

      message:
        "Password Reset Successfully",

      severity: "success",

    });

    setTimeout(() => {

      navigate("/login");

    }, 2000);

  };

  return (

    <Box sx={authPageStyles.container}>

      <Paper
        elevation={8}
        sx={{
          width:
            isMobile
              ? "100%"
              : 420,
          p: 4,
          borderRadius: 3,
        }}
      >

        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
        >
          Reset Password
        </Typography>

        <Typography
          textAlign="center"
          sx={{
            opacity: .7,
            mb: 3,
          }}
        >
          Create a new password
        </Typography>

        <form
          onSubmit={
            handleSubmit(
              onSubmit
            )
          }
        >

          <Stack spacing={2}>

            <AppPasswordField
              label="New Password"
              {...register(
                "password"
              )}
            />

            {errors.password && (

              <Typography
                color="error"
                fontSize={12}
              >
                {
                  errors.password
                    .message
                }
              </Typography>

            )}

            <LinearProgress
              variant="determinate"
              value={getStrength()}
            />

            <AppPasswordField
              label="Confirm Password"
              {...register(
                "confirmPassword"
              )}
            />

            {errors.confirmPassword && (

              <Typography
                color="error"
                fontSize={12}
              >
                {
                  errors
                    .confirmPassword
                    .message
                }
              </Typography>

            )}

            <AppButton
              fullWidth
              type="submit"
            >
              Reset Password
            </AppButton>

            <Link
              component={
                RouterLink
              }
              to="/login"
              textAlign="center"
            >
              Back to Login
            </Link>

          </Stack>

        </form>

      </Paper>

      <AppSnackbar
        open={snackbar.open}
        message={
          snackbar.message
        }
        severity={
          snackbar.severity
        }
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