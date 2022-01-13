import React from "react";
import styles from "./DrawerSidebar.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarItem = ({ data, index }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname.includes(data.link) && styles.activeItem
      } ${styles.sidebarItem}`}
      key={index}
      onClick={() => navigate(data.link)}
    >
      {data.icon}
      <h6>{data.name}</h6>
    </div>
  );
};

export default SidebarItem;
