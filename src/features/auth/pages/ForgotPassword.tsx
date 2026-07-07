import {
  Box,
  Typography,
  Paper,
  Stack,
  Link,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  forgotPasswordSchema,
  type ForgotPasswordSchemaType,
} from "../schemas/forgotPasswordSchema";

import { useForgotPasswordMutation } from "../api/authApi";

import { useState } from "react";

import AppTextField from "../../../components/common/AppTextField";
import AppButton from "../../../components/common/AppButton";
import AppSnackbar from "../../../components/common/AppSnackbar";

import { authPageStyles } from "../../../styles/globalStyles";

export default function ForgotPassword() {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const navigate = useNavigate();

  const [forgotPassword, { isLoading }] =
    useForgotPasswordMutation();

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(
      forgotPasswordSchema
    ),
  });

  const onSubmit = async (
    data: ForgotPasswordSchemaType
  ) => {
    try {
      const response =
        await forgotPassword(data).unwrap();

      setSnackbar({
        open: true,
        message: response.message,
        severity: "success",
      });

      setTimeout(() => {
        navigate("/verify-otp", {
          state: {
            email: data.email,
          },
        });
      }, 1500);
    } catch (error: unknown) {
      setSnackbar({
        open: true,
        message:
          (error as { data?: { message?: string } })?.data?.message ||
          "Unable to send OTP",
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
          sx={{ fontWeight: 700, textAlign: "center" }}
        >
          Forgot Password
        </Typography>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            opacity: .7,
            mb: 3,
          }}
        >
          Enter your registered email.
          We'll send you a verification
          OTP.
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={2}>

            <AppTextField
              label="Registered Email"
              {...register("email")}
            />

            {errors.email && (
              <Typography
                color="error"
                sx={{ fontSize: 12 }}
              >
                {errors.email.message}
              </Typography>
            )}

            <AppButton
              fullWidth
              type="submit"
              disabled={isLoading}
            >
              <EmailIcon sx={{ mr: 1 }} />

              {isLoading
                ? "Sending OTP..."
                : "Send OTP"}
            </AppButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ArrowBackIcon
                color="primary"
                fontSize="small"
              />

              <Link
                component={RouterLink}
                to="/login"
                underline="hover"
              >
                Back to Login
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