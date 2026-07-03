import {
  Box,
  Typography,
} from "@mui/material";

export default function EmployeeEmpty() {
  return (
    <Box
      py={8}
      textAlign="center"
    >
      <Typography variant="h6">
        No Employees Found
      </Typography>

      <Typography
        color="text.secondary"
      >
        Click Add Employee to create one.
      </Typography>
    </Box>
  );
}