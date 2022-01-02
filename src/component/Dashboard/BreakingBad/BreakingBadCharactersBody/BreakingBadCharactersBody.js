import React from "react";
import BreakingBadCharacterCard from "../BreakingBadCharacterCard/BreakingBadCharacterCard";
import { useSelector } from "react-redux";
import Pagination from "../../../Pagination/Pagination";

const WrapperComponent = (props) => {
  return <div className="row">{props.children}</div>;
};

const RenderComponent = (props) => {
  return (
    <div className="col-md-4" key={props.keys}>
      <BreakingBadCharacterCard data={props.data} />
    </div>
  );
};

const BreakingBadCharactersBody = () => {
  const bdCharacters = useSelector((state) => state.breakingBad.bdCharacters);

  console.log(bdCharacters);
  return (
    <div>
      <Pagination
        data={bdCharacters}
        dataLimit={12}
        WrapperComponent={WrapperComponent}
        RenderComponent={RenderComponent}
      />
    </div>
  );
};

export default BreakingBadCharactersBody;
