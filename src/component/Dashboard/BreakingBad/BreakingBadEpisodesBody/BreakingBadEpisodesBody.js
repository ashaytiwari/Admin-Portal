import React from "react";
import styles from "./BreakingBadEpisodesBody.module.scss";
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

const BreakingBadEpisodesBody = () => {
  const bdEpisodes = useSelector((state) => state.breakingBad.bdEpisodes);

  return (
    <div className={styles.body}>
      <Pagination
        data={bdEpisodes}
        dataLimit={12}
        WrapperComponent={WrapperComponent}
        RenderComponent={RenderComponent}
      />
    </div>
  );
};

export default BreakingBadEpisodesBody;
