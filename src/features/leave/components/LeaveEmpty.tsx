import {
  Paper,
  Typography,
} from "@mui/material";

import EventBusyIcon from "@mui/icons-material/EventBusy";

export default function LeaveEmpty() {
  return (
    <Paper
      sx={{
        py: 8,
        textAlign: "center",
      }}
    >
      <EventBusyIcon
        color="disabled"
        sx={{
          fontSize: 70,
          mb: 2,
        }}
      />

      <Typography
        variant="h6"
        color="text.secondary"
      >
        No Leave Records Found
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        mt={1}
      >
        Click "Add Leave" to create a new leave request.
      </Typography>
    </Paper>
  );
}