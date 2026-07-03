import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

interface Props {
  employee: any;
}

export default function EmployeeProfileCard({
  employee,
}: Props) {
  return (
    <Card>

      <CardContent>

        <Stack
          spacing={2}
          alignItems="center"
        >

          <Avatar
            src={employee.avatar}
            sx={{
              width: 120,
              height: 120,
            }}
          />

          <Typography variant="h5">
            {employee.name}
          </Typography>

          <Typography color="text.secondary">
            {employee.designation}
          </Typography>

        </Stack>

      </CardContent>

    </Card>
  );
}