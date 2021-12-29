import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../Pagination/Pagination";
import CharacterCard from "../CharacterCard/CharacterCard";

const WrapperComponent = (props) => {
  return <div className={"row"}>{props.children}</div>;
};

const RenderComponent = (props) => {
  return (
    <div className={"col-md-4"}>
      <CharacterCard data={props.data} />
    </div>
  );
};

const RoomBody = () => {
  const hpCharacters = useSelector((state) => state.harryPotter.hpCharacters);

  return (
    <div className={"mt-5"}>
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
