import React, { useState, useEffect } from "react";
import styles from "./BreakingBadCharacters.module.scss";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { getBDCharacters } from "../../../../services/breakingBadServices";
import { useDispatch } from "react-redux";
import { setBDCharacters } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import RectangularCardSkeleton from "../../../../component/SkeletonLoaders/RectangularCardSkeleton/RectangularCardSkeleton";
import BreakingBadCharactersBody from "../../../../component/Dashboard/BreakingBad/BreakingBadCharactersBody/BreakingBadCharactersBody";

const BreakingBadCharacters = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

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
      <div className={styles.header}>
        <div>
          <IconButton className={styles.backBtn} onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <h4>Characters</h4>
        </div>
        <img src={BreakingLogo} alt={"house-logo"} />
      </div>
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
