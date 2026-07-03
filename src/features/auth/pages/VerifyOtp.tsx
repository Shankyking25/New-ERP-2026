import {
  Box,
  Paper,
  Typography,
  Stack,
  TextField,
  Link,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import AppButton from "../../../components/common/AppButton";
import AppSnackbar from "../../../components/common/AppSnackbar";

import { authPageStyles } from "../../../styles/globalStyles";

export default function VerifyOtp() {

  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const inputRefs = useRef<
    HTMLInputElement[]
  >([]);

  const [seconds, setSeconds] =
    useState(60);

  const [snackbar, setSnackbar] =
    useState({
      open: false,
      message: "",
      severity:
        "success" as
          | "success"
          | "error"
          | "warning"
          | "info",
    });

  useEffect(() => {

    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);

  }, [seconds]);

  const handleChange = (
    value: string,
    index: number
  ) => {

    if (!/^[0-9]?$/.test(value))
      return;

    const newOtp = [...otp];

    newOtp[index] = value;

    setOtp(newOtp);

    if (
      value &&
      index < 5
    ) {
      inputRefs.current[
        index + 1
      ]?.focus();
    }

  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {

    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ]?.focus();
    }

  };

  const verifyOtp = () => {

    const enteredOtp =
      otp.join("");

    console.log(
      "OTP = ",
      enteredOtp
    );

    if (
      enteredOtp.length !== 6
    ) {
      setSnackbar({
        open: true,
        message:
          "Please enter complete OTP",
        severity: "error",
      });

      return;
    }

    navigate("/reset-password", {
      state: {
        email,
        otp: enteredOtp,
      },
    });

  };

  const resendOtp = () => {

    setSeconds(60);

    setSnackbar({
      open: true,
      message:
        "OTP Resent Successfully",
      severity: "success",
    });

  };

  return (
    <Box sx={authPageStyles.container}>

      <Paper
        elevation={8}
        sx={{
          width: isMobile
            ? "100%"
            : 430,
          p: 4,
          borderRadius: 3,
        }}
      >

        <Typography
          variant="h5"
         sx={{ textAlign: "center", fontWeight: 700 }}
        >
          Verify OTP
        </Typography>

        <Typography
          
          sx={{
            mb: 3,
            opacity: .7,  textAlign: "center"
          }}
        >
          OTP sent to

          <br />

          <b>{email}</b>

        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center" }}
        >

          {otp.map(
            (
              digit,
              index
            ) => (
              <TextField
                key={index}
                value={digit}
                inputRef={(el) => {

                  if (el)
                    inputRefs.current[
                      index
                    ] = el;

                }}

                onChange={(
                  e
                ) =>
                  handleChange(
                    e.target.value,
                    index
                  )
                }

                onKeyDown={(
                  e
                ) =>
                  handleKeyDown(
                    e,
                    index
                  )
                }

                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign:
                      "center",
                    fontSize: 24,
                  },
                }}

                sx={{
                  width: 55,
                }}
              />
            )
          )}

        </Stack>

        <Stack
          spacing={2}
          sx={{ mt: 4 }}
        >

          <AppButton
            fullWidth
            onClick={
              verifyOtp
            }
          >
            Verify OTP
          </AppButton>

          {seconds > 0 ? (

            <Typography
             sx={{ textAlign: "center" }}
            >
              Resend OTP in{" "}
              <b>
                {seconds}s
              </b>
            </Typography>

          ) : (

            <Link
              component={
                RouterLink
              }
              underline="hover"
              sx={{ textAlign: "center" }}
              onClick={
                resendOtp
              }
            >
              Resend OTP
            </Link>

          )}

        </Stack>

      </Paper>

      <AppSnackbar
        open={
          snackbar.open
        }
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