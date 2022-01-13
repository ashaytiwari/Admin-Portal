import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HogwartsHeader from "../../../../component/Dashboard/HarryPotter/HogwartsHeader/HogwartsHeader";
import HogwartsBody from "../../../../component/Dashboard/HarryPotter/HogwartsBody/HogwartsBody";
import HarryPotterAbout from "../../../../component/Dashboard/HarryPotter/HarryPotterAbout/HarryPotterAbout";

const Hogwarts = () => {
  const location = useLocation();

  if (location.pathname !== "/dashboard/harryPotter") {
    return <Outlet />;
  }

  return (
    <div>
      <HogwartsHeader />
      <HarryPotterAbout />
      <HogwartsBody />
    </div>
  );
};

export default Hogwarts;
