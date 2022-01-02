import React, { useEffect, useState } from "react";
import styles from "./BreakingBadEpisodes.module.scss";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import { useDispatch } from "react-redux";
import { getBDEpisodes } from "../../../../services/breakingBadServices";
import { setBDEpisodes } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import RectangularCardSkeleton from "../../../../component/SkeletonLoaders/RectangularCardSkeleton/RectangularCardSkeleton";
import BreakingBadEpisodesBody from "../../../../component/Dashboard/BreakingBad/BreakingBadEpisodesBody/BreakingBadEpisodesBody";
import { bdEpisodesFilterData } from "../../../../assets/data/bdEpisodesFilterData";
import FilterSection from "../../../../component/FilterSection/FilterSection";

const BreakingBadEpisodes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    getBreakingBadEpisodes();

    return () => {
      dispatch(setBDEpisodes([]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBreakingBadEpisodes = () => {
    setIsLoading(true);
    getBDEpisodes().then((res) => {
      if (res.status === 200) {
        dispatch(setBDEpisodes(res.data));
        setIsLoading(false);
      } else {
        enqueueSnackbar(res.statusText, { variant: "error" });
        setIsLoading(false);
      }
    });
  };

  const handleFilterChange = (data) => {
    setFilterType(data.index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <IconButton className={styles.backBtn} onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <h4>Episodes</h4>
        </div>
        <img src={BreakingLogo} alt={"house-logo"} />
      </div>
      <div className={styles.body}>
        <FilterSection
          onFilterChange={handleFilterChange}
          data={bdEpisodesFilterData}
          initialValue={bdEpisodesFilterData[0].title}
        />
        {isLoading ? (
          <RectangularCardSkeleton />
        ) : (
          <BreakingBadEpisodesBody filterType={filterType} />
        )}
      </div>
    </div>
  );
};

export default BreakingBadEpisodes;
