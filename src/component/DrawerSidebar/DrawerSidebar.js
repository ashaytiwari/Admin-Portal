import React from "react";
import styles from "./DrawerSidebar.module.scss";
import Logo from "../../assets/images/logo.png";
import { sidebarData } from "../../assets/data/sidebarData";
import SidebarItem from "./SidebarItem";
import { useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const DrawerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src={Logo} alt={"logo"} />
      </div>

      <div className={styles.body}>
        <div
          className={`${location.pathname === "/dashboard" && styles.activeItem
            } ${styles.sidebarItem}`}
          onClick={() => navigate("/dashboard")}
        >
          <HomeOutlinedIcon />
          <h6>Home</h6>
        </div>
        {sidebarData.map((item, index) => (
          <SidebarItem data={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DrawerSidebar;
