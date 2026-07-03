import { Grid } from "@mui/material";

import DashboardCard from "./DashboardCard";

interface Props {
  data: any;
}

export default function DashboardStats({
  data,
}: Props) {
  return (
    <Grid container spacing={3}>

      <Grid size={{ xs:12, md:3 }}>
        <DashboardCard
          title="Employees"
          value={data.totalEmployees}
        />
      </Grid>

      <Grid size={{ xs:12, md:3 }}>
        <DashboardCard
          title="Active"
          value={data.activeEmployees}
        />
      </Grid>

      <Grid size={{ xs:12, md:3 }}>
        <DashboardCard
          title="Inactive"
          value={data.inactiveEmployees}
        />
      </Grid>

      <Grid size={{ xs:12, md:3 }}>
        <DashboardCard
          title="Departments"
          value={data.totalDepartments}
        />
      </Grid>

    </Grid>
  );
}
