import React from "react";
import styles from "./DrawerSidebar.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarItem = ({ data, key }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div
      className={`${location.pathname === data.link && styles.activeItem} ${
        styles.sidebarItem
      }`}
      key={key}
      onClick={() => navigate(data.link)}
    >
      {data.icon}
      <h6>{data.name}</h6>
    </div>
  );
};

export default SidebarItem;
