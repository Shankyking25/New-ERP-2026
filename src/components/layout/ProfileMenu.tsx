// import { useState } from "react";

// import {
//   Avatar,
//   Divider,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";

// export default function ProfileMenu() {
//   const [anchorEl, setAnchorEl] =
//     useState<null | HTMLElement>(null);

//   const open = Boolean(anchorEl);

//   const handleOpen = (
//     event: React.MouseEvent<HTMLElement>
//   ) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton onClick={handleOpen}>
//         <Avatar>A</Avatar>
//       </IconButton>

//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose}>
//           Profile
//         </MenuItem>

//         <MenuItem onClick={handleClose}>
//           Settings
//         </MenuItem>

//         <Divider />

//         <MenuItem onClick={handleClose}>
//           Logout
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }





import { useState } from "react";

import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../features/auth/slices/authSlice";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleOpen = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());

    handleClose();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <Avatar>A</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          Profile
        </MenuItem>

        <MenuItem onClick={handleClose}>
          Settings
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={handleLogout}
          sx={{
            color: "error.main",
            fontWeight: 600,
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}