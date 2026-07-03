import {
  Grid,
  Typography,
} from "@mui/material";

import GroupsIcon from "@mui/icons-material/Groups";
import BadgeIcon from "@mui/icons-material/Badge";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventBusyIcon from "@mui/icons-material/EventBusy";

import DashboardCard from "../../../components/layout/DashboardCard";
import AppLayout from "../../../layouts/AppLayout";

import AttendanceChart from "../../../components/layout/AttendanceChart";
import RecentEmployees from "../../../components/layout/RecentEmployees";


export default function Dashboard() {
  return (
    <AppLayout>

      <Typography
        variant="h4"
        component="h1"
        sx={{ mb: 3, fontWeight: 'bold' }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="Employees"
            value="150"
            icon={<GroupsIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="Attendance"
            value="143"
            icon={<BadgeIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="Payroll"
            value="₹8.4L"
            icon={<PaymentsIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <DashboardCard
            title="Leave"
            value="12"
            icon={<EventBusyIcon fontSize="large" />}
          />
        </Grid>

      </Grid>



<Grid container spacing={3} sx={{ mt: 2 }}>

  <Grid size={{ xs: 12, md: 8 }}>
    <AttendanceChart />
  </Grid>

  <Grid size={{ xs: 12, md: 4 }}>
    <RecentEmployees />
  </Grid>

</Grid>


    </AppLayout>
  );
}