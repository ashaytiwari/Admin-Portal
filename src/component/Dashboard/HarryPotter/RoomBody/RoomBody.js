import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../Pagination/Pagination";

const WrapperComponent = (props) => {
  return <div className={"row"}>{props.children}</div>;
};

const RenderComponent = (props) => {
  return (
    <div className={"col-md-4"}>
      <h4>{props.data.name}</h4>
    </div>
  );
};

const RoomBody = () => {
  const hpCharacters = useSelector((state) => state.harryPotter.hpCharacters);

  return (
    <div>
      <h4>Room Body</h4>
      <Pagination
        data={hpCharacters}
        dataLimit={12}
        WrapperComponent={WrapperComponent}
        RenderComponent={RenderComponent}
      />
    </div>
  );
};

export default RoomBody;
