import { Box, Toolbar } from "@mui/material";

import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function AppLayout({
  children,
}: Props) {



  return (
    <Box sx={{ display: "flex" }}>
      <Navbar onMenuClick={() => {}} />

      <Sidebar mobileOpen={false} sidebarOpen={true} onClose={() => {}} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}