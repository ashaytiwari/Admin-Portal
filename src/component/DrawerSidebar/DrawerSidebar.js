import React from "react";
import styles from "./DrawerSidebar.module.scss";
import Logo from "../../assets/images/logo.png";
import { sidebarData } from "../../assets/data/sidebarData";
import SidebarItem from "./SidebarItem";

const DrawerSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <img src={Logo} alt={"logo"} />
        <h4>Admin Portal</h4>
      </div>

      <div className={styles.body}>
        {sidebarData.map((item, index) => (
          <SidebarItem data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default DrawerSidebar;
