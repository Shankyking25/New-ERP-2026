import {
  Backdrop,
  CircularProgress,
} from "@mui/material";

interface Props {
  open: boolean;
}

export default function EmployeeLoading({
  open,
}: Props) {
  return (
    <Backdrop
      open={open}
      sx={{
        zIndex: 9999,
      }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}