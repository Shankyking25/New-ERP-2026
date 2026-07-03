import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Tooltip,
} from "@mui/material";

import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

import { menuItems } from "./MenuItems";

const drawerWidth = 240;
const collapsedWidth = 70;

interface Props {
  mobileOpen: boolean;
  sidebarOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({
  mobileOpen,
  sidebarOpen,
  onClose,
}: Props) {

  const location = useLocation();

  const drawerContent = (
    <>
      <Toolbar />

      <List sx={{ mt: 1 }}>

        {menuItems.map((item) => {

          const active =
            location.pathname === item.path;

          return (

            <ListItem
              key={item.path}
              disablePadding
              sx={{
                display: "block",
                px: 1,
                py: .4,
              }}
            >

              <Tooltip
                title={
                  sidebarOpen
                    ? ""
                    : item.title
                }
                placement="right"
              >

                <ListItemButton

                  component={RouterLink}

                  to={item.path}

                  onClick={() => {
                    if (window.innerWidth < 900) {
                      onClose();
                    }
                  }}

                  sx={{

                    minHeight: 50,

                    borderRadius: 2,

                    justifyContent:
                      sidebarOpen
                        ? "initial"
                        : "center",

                    px: 2,

                    transition:
                      ".25s",

                    bgcolor:
                      active
                        ? "#1976d2"
                        : "transparent",

                    color:
                      active
                        ? "#fff"
                        : "#444",

                    "&:hover": {

                      bgcolor:
                        active
                          ? "#1565c0"
                          : "#f3f4f6",

                    },

                  }}

                >

                  <ListItemIcon

                    sx={{

                      minWidth: 0,

                      mr:
                        sidebarOpen
                          ? 3
                          : "auto",

                      justifyContent:
                        "center",

                      color:
                        active
                          ? "#fff"
                          : "#555",

                    }}

                  >

                    {item.icon}

                  </ListItemIcon>

                  <ListItemText

                    primary={item.title}

                    sx={{

                      opacity:
                        sidebarOpen
                          ? 1
                          : 0,

                      whiteSpace:
                        "nowrap",

                      transition:
                        ".2s",

                    }}

                  />

                </ListItemButton>

              </Tooltip>

            </ListItem>

          );

        })}

      </List>
    </>
  );

  return (

    <Box

      component="nav"

      sx={{

        width: {
          md: sidebarOpen
            ? drawerWidth
            : collapsedWidth,
        },

        flexShrink: {
          md: 0,
        },

      }}

    >

      {/* Mobile Drawer */}

      <Drawer

        variant="temporary"

        open={mobileOpen}

        onClose={onClose}

        ModalProps={{
          keepMounted: true,
        }}

        sx={{

          display: {
            xs: "block",
            md: "none",
          },

          "& .MuiDrawer-paper": {

            width: drawerWidth,

            boxSizing: "border-box",

            borderRight:
              "1px solid #e5e7eb",

          },

        }}

      >

        {drawerContent}

      </Drawer>

      {/* Desktop Drawer */}

      <Drawer

        variant="permanent"

        open

        sx={{

          display: {
            xs: "none",
            md: "block",
          },

          "& .MuiDrawer-paper": {

            width:
              sidebarOpen
                ? drawerWidth
                : collapsedWidth,

            transition:
              "width .25s ease",

            overflowX:
              "hidden",

            borderRight:
              "1px solid #e5e7eb",

            boxSizing:
              "border-box",

            background:
              "#fff",

          },

        }}

      >

        {drawerContent}

      </Drawer>

    </Box>

  );

}