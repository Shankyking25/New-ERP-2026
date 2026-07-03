import { Paper, Typography } from "@mui/material";

export default function AttendanceEmpty() {
  return (
    <Paper
      sx={{
        p: 5,
        textAlign: "center",
      }}
    >
      <Typography variant="h6">
        No Attendance Found
      </Typography>
    </Paper>
  );
}