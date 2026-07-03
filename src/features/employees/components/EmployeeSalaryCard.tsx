import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Props {
  employee: any;
}

export default function EmployeeSalaryCard({
  employee,
}: Props) {
  return (
    <Card>

      <CardContent>

        <Typography variant="h6">
          Salary
        </Typography>

        <Typography variant="h4">
          ₹ {employee.salary}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Joining Date
        </Typography>

        <Typography>
          {employee.joiningDate}
        </Typography>

      </CardContent>

    </Card>
  );
}