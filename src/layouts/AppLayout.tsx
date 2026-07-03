// import { Box, Toolbar } from "@mui/material";

// import Navbar from "../components/layout/Navbar";
// import Sidebar from "../components/layout/Sidebar";

// interface Props {
//   children: React.ReactNode;
// }

// export default function AppLayout({
//   children,
// }: Props) {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <Navbar />

//       <Sidebar />

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//         }}
//       >
//         <Toolbar />
//         {children}
//       </Box>
//     </Box>
//   );
// }














// import { useState } from "react";
// import { Box, Toolbar } from "@mui/material";

// import Navbar from "../components/layout/Navbar";
// import Sidebar from "../components/layout/Sidebar";

// interface Props {
//   children: React.ReactNode;
// }

// const drawerWidth = 240;

// export default function AppLayout({
//   children,
// }: Props) {

//   // const [mobileOpen, setMobileOpen] =useState(false);

//   // const handleDrawerToggle = () => {
//   //   setMobileOpen((prev) => !prev);
//   // };

//   const drawerWidth = 240;

// const [sidebarOpen, setSidebarOpen] =
//   useState(true);

// const [mobileOpen, setMobileOpen] =
//   useState(false);

// const handleDrawerToggle = () => {
//   if (window.innerWidth >= 900) {
//     setSidebarOpen((prev) => !prev);
//   } else {
//     setMobileOpen((prev) => !prev);
//   }
// };



//   return (
//     <Box sx={{ display: "flex" }}>
//       <Navbar
//         onMenuClick={handleDrawerToggle}
//       />

//       <Sidebar
//         mobileOpen={mobileOpen}
//         onClose={handleDrawerToggle}
//       />

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           // width: {
//           //   md: `calc(100% - ${drawerWidth}px)`,
//           // },

// ml: {
//   md: sidebarOpen ? `${drawerWidth}px` : "70px",
// },
// transition: "all .3s",


//           p: {
//             xs: 2,
//             md: 3,
//           },
//         }}
//       >
//         <Toolbar />

//         {children}
//       </Box>
//     </Box>
//   );
// }








// import { useState } from "react";
// import { Box, Toolbar } from "@mui/material";

// import Navbar from "../components/layout/Navbar";
// import Sidebar from "../components/layout/Sidebar";

// interface Props {
//   children: React.ReactNode;
// }

// const drawerWidth = 240;
// const collapsedDrawerWidth = 70;

// export default function AppLayout({
//   children,
// }: Props) {

//   const [sidebarOpen, setSidebarOpen] =
//     useState(true);

//   const [mobileOpen, setMobileOpen] =
//     useState(false);

//   const handleDrawerToggle = () => {

//     if (window.innerWidth >= 900) {

//       setSidebarOpen((prev) => !prev);

//     } else {

//       setMobileOpen((prev) => !prev);

//     }

//   };

//   return (
//     <Box sx={{ display: "flex" }}>

//       <Navbar
//         onMenuClick={handleDrawerToggle}
//       />

//       <Sidebar
//         mobileOpen={mobileOpen}
//         sidebarOpen={sidebarOpen}
//         onClose={handleDrawerToggle}
//       />

//       <Box
//         component="main"
//         sx={{

//           flexGrow: 1,

//           width: {
//             xs: "100%",
//             md: `calc(100% - ${
//               sidebarOpen
//                 ? drawerWidth
//                 : collapsedDrawerWidth
//             }px)`,
//           },

//           ml: {
//             xs: 0,
//             md: `${
//               sidebarOpen
//                 ? drawerWidth
//                 : collapsedDrawerWidth
//             }px`,
//           },

//           transition:
//             "margin .3s ease,width .3s ease",

//           p: {
//             xs: 2,
//             md: 3,
//           },

//           overflow: "hidden",

//           minHeight: "100vh",

//           bgcolor: "#f5f5f5",

//         }}
//       >

//         <Toolbar />

//         {children}

//       </Box>

//     </Box>
//   );
// }








import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

interface Props {
  children: React.ReactNode;
}

const drawerWidth = 240;
const collapsedWidth = 70;

export default function AppLayout({
  children,
}: Props) {

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const handleMenuClick = () => {

    if (window.innerWidth < 900) {

      setMobileOpen((prev) => !prev);

    } else {

      setSidebarOpen((prev) => !prev);

    }

  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#f5f6fa",
      }}
    >

      <Navbar
        onMenuClick={handleMenuClick}
      />

      <Sidebar
        mobileOpen={mobileOpen}
        sidebarOpen={sidebarOpen}
        onClose={handleDrawerClose}
      />

      <Box
        component="main"
        sx={{

          flexGrow: 1,

          // width: {
          //   md: `calc(100% - ${
          //     sidebarOpen
          //       ? drawerWidth
          //       : collapsedWidth
          //   }px)`,
          // },
          
          // ml: {
          //   xs: 0,
          //   md: sidebarOpen
          //     ? `${drawerWidth}px`
          //     : `${collapsedWidth}px`,
          // },

          // transition:
          //   "margin-left .25s ease,width .25s ease",

width: "100%",

transition: "all .25s ease",

          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          overflowX: "hidden",
        }}
      >

        <Toolbar />

        {children}

      </Box>

    </Box>

  );
}

