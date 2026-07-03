import { Chip } from "@mui/material";

interface Props {
  status: string;
}

export default function EmployeeStatusChip({
  status,
}: Props) {
  return (
    <Chip
      label={status}
      color={
        status === "active"
          ? "success"
          : "error"
      }
      size="small"
    />
  );
}