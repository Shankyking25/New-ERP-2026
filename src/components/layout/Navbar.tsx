// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";

// import NotificationMenu from "./NotificationMenu";
// import ProfileMenu from "./ProfileMenu";

// interface NavbarProps {
//   onMenuClick?: () => void;
// }

// export default function Navbar({
//   onMenuClick,
// }: NavbarProps) {
//   return (
//     <AppBar
//       position="fixed"
//       color="inherit"
//       elevation={1}
//       sx={{
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//       }}
//     >
//       <Toolbar>

//         <IconButton
//           color="inherit"
//           edge="start"
//           onClick={onMenuClick}
//           // sx={{
//           //   mr: 2,
//           //   display: {
//           //     md: "none",
//           //   },
//           // }}

//           sx={{  mr: 2,}}
//         >
//           <MenuIcon />
//         </IconButton>

//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 700,
//           }}
//         >
//           ERP SYSTEM
//         </Typography>

//         <Box sx={{ flexGrow: 1 }} />

//         <NotificationMenu />

//         <ProfileMenu />

//       </Toolbar>
//     </AppBar>
//   );
// }






import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import NotificationMenu from "./NotificationMenu";
import ProfileMenu from "./ProfileMenu";

interface Props {
  onMenuClick: () => void;
}

export default function Navbar({
  onMenuClick,
}: Props) {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        borderBottom: "1px solid #e5e7eb",
        bgcolor: "#fff",
        color: "#222",
        zIndex: (theme) =>
          theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>

        <IconButton
          onClick={onMenuClick}
          edge="start"
          color="inherit"
          sx={{
            mr: 2,
          }}
        >
          <MenuRoundedIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: .5,
          }}
        >
          ERP SYSTEM
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <NotificationMenu />

        <ProfileMenu />

      </Toolbar>
    </AppBar>
  );
}