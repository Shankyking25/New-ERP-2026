import {
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

interface Props {
  employee: any;
}

export default function EmployeeInfo({
  employee,
}: Props) {
  return (
    <Card>

      <CardContent>

        <Grid container spacing={2}>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography>
              Employee ID
            </Typography>

            <Typography fontWeight={600}>
              {employee.employeeId}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography>Email</Typography>

            <Typography fontWeight={600}>
              {employee.email}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography>Mobile</Typography>

            <Typography fontWeight={600}>
              {employee.mobile}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography>
              Department
            </Typography>

            <Typography fontWeight={600}>
              {employee.department?.name ?? "-"}
            </Typography>
          </Grid>

        </Grid>

      </CardContent>

    </Card>
  );
}