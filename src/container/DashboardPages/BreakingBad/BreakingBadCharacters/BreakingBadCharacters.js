import React, { useState, useEffect } from "react";
import styles from "./BreakingBadCharacters.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import { getBDCharacters } from "../../../../services/breakingBadServices";
import { useDispatch } from "react-redux";
import { setBDCharacters } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import RectangularCardSkeleton from "../../../../component/SkeletonLoaders/RectangularCardSkeleton/RectangularCardSkeleton";
import BreakingBadCharactersBody from "../../../../component/Dashboard/BreakingBad/BreakingBadCharactersBody/BreakingBadCharactersBody";
import { useTranslation } from "react-i18next";
import BackNavigationSubHeader from "../../../../component/Headers/BackNavigationSubHeader/BackNavigationSubHeader";

const BreakingBadCharacters = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getBreakingBadCharacters();

    return () => {
      dispatch(setBDCharacters([]));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBreakingBadCharacters = () => {
    setIsLoading(true);
    getBDCharacters().then((res) => {
      if (res.status === 200) {
        dispatch(setBDCharacters(res.data));
        setIsLoading(false);
      } else {
        enqueueSnackbar(res.statusText, { variant: "error" });
        setIsLoading(false);
      }
    });
  };

  return (
    <div className={styles.container}>
      <BackNavigationSubHeader
        title={t("breakingBad:characters")}
        src={BreakingLogo}
      />
      <div className={styles.body}>
        {isLoading ? (
          <RectangularCardSkeleton />
        ) : (
          <BreakingBadCharactersBody />
        )}
      </div>
    </div>
  );
};

export default BreakingBadCharacters;
