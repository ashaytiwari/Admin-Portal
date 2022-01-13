import React, { useEffect, useState } from "react";
import styles from "./BreakingBadEpisodes.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import { useDispatch } from "react-redux";
import { getBDEpisodes } from "../../../../services/breakingBadServices";
import { setBDEpisodes } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import RectangularCardSkeleton from "../../../../component/SkeletonLoaders/RectangularCardSkeleton/RectangularCardSkeleton";
import BreakingBadEpisodesBody from "../../../../component/Dashboard/BreakingBad/BreakingBadEpisodesBody/BreakingBadEpisodesBody";
import { bdEpisodesFilterData } from "../../../../assets/data/bdEpisodesFilterData";
import FilterSection from "../../../../component/FilterSection/FilterSection";
import { useTranslation } from "react-i18next";
import { handleResetPagination } from "../../../../redux/actions/ui.actions";
import BackNavigationSubHeader from "../../../../component/Headers/BackNavigationSubHeader/BackNavigationSubHeader";

const BreakingBadEpisodes = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    getBreakingBadEpisodes();

    return () => {
      dispatch(setBDEpisodes([]));
      dispatch(handleResetPagination(false));
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
    dispatch(handleResetPagination(true));
    setFilterType(data.index);
  };

  return (
    <div className={styles.container}>
      <BackNavigationSubHeader
        title={t("breakingBad:episodes")}
        src={BreakingLogo}
      />
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
