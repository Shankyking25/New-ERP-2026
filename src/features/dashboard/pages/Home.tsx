// import {
//   Grid,
// } from "@mui/material";

// import DashboardStats from "../components/DashboardStats";

// import DashboardSkeleton from "../components/DashboardSkeleton";

// import RecentEmployees from "../components/RecentEmployees";

// import {
// useGetDashboardOverviewQuery,
// useGetRecentEmployeesQuery,
// } from "../api/dashboardApi";

// export default function Home(){

// const{
// data,
// isLoading,
// }=useGetDashboardOverviewQuery();

// const{
// data:recent,
// }=useGetRecentEmployeesQuery();

// if(isLoading){

// return<DashboardSkeleton/>;

// }

// return(

// <Grid container spacing={3}>

// <Grid size={{xs:12}}>

// <DashboardStats
// data={data.data}
// />

// </Grid>

// <Grid size={{xs:12}}>

// <RecentEmployees
// employees={recent?.employees??[]}
// />

// </Grid>

// </Grid>

// );

// }




export default function Home() {
  return (
    <h1>Dashboard Coming Soon</h1>
  );
}