import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Dashboard.module.scss";
import DrawerSidebar from "../../../component/DrawerSidebar/DrawerSidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import { getLocalStorage } from "../../../utils/globalFunctions/globalFunctions";

const drawerWidth = 280;

const Dashboard = (props) => {
  const { window } = props;
  const location = useLocation();
  const user = getLocalStorage();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (!user) {
    console.log("Logout");
    return <Navigate replace to={"/login"} />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      {/* Header Section */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        className={styles.header}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Header Section */}

      {/* Drawer Section */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        className={styles.drawer}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid #707070"
            }
          }}
        >
          <DrawerSidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px dashed #707070"
              // backgroundColor: colorTheme === "dark" ? "#212b36" : "#fff"
            }
          }}
          className={styles.drawer}
          open
        >
          <DrawerSidebar />
        </Drawer>
      </Box>
      {/* Drawer Section */}

      {/* Body Section */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
        className={styles.body}
      >
        <Toolbar />
        {location.pathname === "/dashboard" ? <Home /> : <Outlet />}
      </Box>
      {/* Body Section */}
    </Box>
  );
};

export default Dashboard;
