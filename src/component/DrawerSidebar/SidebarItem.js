import React from "react";
import styles from "./DrawerSidebar.module.scss";

const SidebarItem = ({ data, key }) => {
  return (
    <div
      className={`${data.name === "Harry Potter" && styles.activeItem} ${
        styles.sidebarItem
      }`}
      key={key}
    >
      {data.icon}
      <h6>{data.name}</h6>
    </div>
  );
};

export default SidebarItem;
