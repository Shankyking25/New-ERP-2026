import {
  Badge,
  IconButton,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

export default function NotificationMenu() {

  return (
    <IconButton color="inherit">

      <Badge
        badgeContent={5}
        color="error"
      >
        <NotificationsIcon />
      </Badge>

    </IconButton>
  );
}