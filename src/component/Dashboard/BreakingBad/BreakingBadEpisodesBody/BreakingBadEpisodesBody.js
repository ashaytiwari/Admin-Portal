import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../../Pagination/Pagination";
import BreakingBadEpisodeCard from "../BreakingBadEpisodeCard/BreakingBadEpisodeCard";

const WrapperComponent = (props) => {
  return <div className="row">{props.children}</div>;
};

const RenderComponent = (props) => {
  return (
    <div className="col-md-4">
      <BreakingBadEpisodeCard data={props.data} />
    </div>
  );
};

const BreakingBadEpisodesBody = (props) => {
  const bdEpisodes = useSelector((state) => state.breakingBad.bdEpisodes);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (props.filterType === "all") {
      setFilteredData(bdEpisodes);
    } else {
      let array = bdEpisodes.filter((item) => {
        return Number(item.season) === props.filterType;
      });
      setFilteredData(array);
    }
  }, [bdEpisodes, props.filterType]);

  return (
    <div>
      <Pagination
        data={filteredData}
        dataLimit={12}
        WrapperComponent={WrapperComponent}
        RenderComponent={RenderComponent}
      />
    </div>
  );
};

export default BreakingBadEpisodesBody;
