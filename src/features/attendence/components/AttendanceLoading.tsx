import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
  open: boolean;
}

export default function AttendanceLoading({
  open,
}: Props) {
  return (
    <Backdrop
      open={open}
      sx={{
        color: "#fff",
        zIndex: 9999,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}