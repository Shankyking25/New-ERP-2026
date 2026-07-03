import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import { useGetEmployeeByIdQuery } from "../api/employeeApi";

import EmployeeProfileCard from "../components/EmployeeProfileCard";
import EmployeeInfo from "../components/EmployeeInfo";
import EmployeeSalaryCard from "../components/EmployeeSalaryCard";

export default function EmployeeDetails() {
  const { id } = useParams();

  const { data, isLoading } =
    useGetEmployeeByIdQuery(id!);

  if (isLoading) return <>Loading...</>;

  const employee = data.employee;

  return (
    <Grid container spacing={3}>

      <Grid size={{ xs: 12, md: 4 }}>
        <EmployeeProfileCard employee={employee} />
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <EmployeeInfo employee={employee} />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <EmployeeSalaryCard employee={employee} />
      </Grid>

    </Grid>
  );
}