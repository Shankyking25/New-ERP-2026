// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import BadgeIcon from "@mui/icons-material/Badge";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import SettingsIcon from "@mui/icons-material/Settings";

// export const menuItems = [
//   {
//     title: "Dashboard",
//     icon: <DashboardIcon />,
//     path: "/",
//   },
//   {
//     title: "Employees",
//     icon: <PeopleIcon />,
//     path: "/employees",
//   },
//   {
//     title: "Departments",
//     icon: <BusinessIcon />,
//     path: "/departments",
//   },
//   {
//     title: "Attendance",
//     icon: <BadgeIcon />,
//     path: "/attendance",
//   },
//   {
//     title: "Leave",
//     icon: <EventAvailableIcon />,
//     path: "/leave",
//   },
//   {
//     title: "Payroll",
//     icon: <PaymentsIcon />,
//     path: "/payroll",
//   },
//   {
//     title: "Reports",
//     icon: <ReceiptLongIcon />,
//     path: "/reports",
//   },
//   {
//     title: "Settings",
//     icon: <SettingsIcon />,
//     path: "/settings",
//   },
// ];




// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import BadgeIcon from "@mui/icons-material/Badge";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
// import SettingsIcon from "@mui/icons-material/Settings";

// export const menuItems = [
//   {
//     title: "Dashboard",
//     path: "/",
//     icon: <DashboardIcon />,
//   },
//   {
//     title: "Employees",
//     path: "/employees",
//     icon: <PeopleIcon />,
//   },
//   {
//     title: "Departments",
//     path: "/departments",
//     icon: <BusinessIcon />,
//   },
//   {
//     title: "Attendance",
//     path: "/attendance",
//     icon: <BadgeIcon />,
//   },
//   {
//     title: "Leave",
//     path: "/leave",
//     icon: <EventAvailableIcon />,
//   },
//   {
//     title: "Payroll",
//     path: "/payroll",
//     icon: <PaymentsIcon />,
//   },
//   {
//     title: "Reports",
//     path: "/reports",
//     icon: <ReceiptLongIcon />,
//   },
//   {
//     title: "Settings",
//     path: "/settings",
//     icon: <SettingsIcon />,
//   },
// ];







import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import BadgeIcon from "@mui/icons-material/Badge";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsIcon from "@mui/icons-material/Settings";

export interface MenuItemType {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const menuItems: MenuItemType[] = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Employees",
    path: "/employees",
    icon: <PeopleIcon />,
  },
  {
    title: "Departments",
    path: "/departments",
    icon: <BusinessIcon />,
  },
  {
    title: "Attendance",
    path: "/attendance",
    icon: <BadgeIcon />,
  },
  {
    title: "Leave",
    path: "/leave",
    icon: <EventAvailableIcon />,
  },
  {
    title: "Payroll",
    path: "/payroll",
    icon: <PaymentsIcon />,
  },
  {
    title: "Reports",
 //   path: "/reports",
    icon: <ReceiptLongIcon />,
  },
  {
    title: "Settings",
  //  path: "/settings",
    icon: <SettingsIcon />,
  },
];