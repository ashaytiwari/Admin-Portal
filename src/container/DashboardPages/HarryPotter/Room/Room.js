import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Room.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation, useNavigate } from "react-router-dom";
import { getCharacters } from "../../../../services/harryPotterServices";
import { useDispatch } from "react-redux";
import { setHPCharacters } from "../../../../redux/actions/harryPotter.actions";
import { useSnackbar } from "notistack";
import RoomBody from "../../../../component/Dashboard/HarryPotter/RoomBody/RoomBody";
import RectangularCardSkeleton from "../../../../component/SkeletonLoaders/RectangularCardSkeleton/RectangularCardSkeleton";
import FilterSection from "../../../../component/FilterSection/FilterSection";
import { useTranslation } from "react-i18next";
import { translatedNameForHPHouse } from "../../../../utils/globalFunctions/globalFunctions";
import { hpFilterData } from "../../../../assets/data/hpFilterData";

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [queryType, setQueryType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state?.keys === "commonRoom") {
      setQueryType("");
    } else {
      setQueryType(`house/${location.state?.keys}`);
    }
  }, [location.state]);

  useEffect(() => {
    if (queryType !== null) {
      getHPCharacters();

      // Clearing redux data on component unmount
      return () => {
        dispatch(setHPCharacters([]));
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryType]);

  const getHPCharacters = () => {
    setIsLoading(true);
    getCharacters(queryType).then((res) => {
      if (res?.status === 200) {
        setIsLoading(false);
        dispatch(setHPCharacters(res?.data));
      } else {
        enqueueSnackbar(res?.statusText, { variant: "error" });
        setIsLoading(false);
      }
    });
  };

  const handleFilterChange = (data) => {
    if (data.value === "all") setQueryType("");
    else if (data.value === "students") setQueryType(data.value);
    else if (data.value === "staff") setQueryType(data.value);
  };

  return (
    <div className={styles.roomWrapper}>
      <div className={styles.header}>
        <div>
          <IconButton className={styles.backBtn} onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <h4>{translatedNameForHPHouse(location.state?.keys, t)}</h4>
        </div>
        <img src={location.state?.image} alt={"house-logo"} />
      </div>
      {location.state?.keys === "commonRoom" && (
        <div className="my-4">
          <FilterSection
            onFilterChange={handleFilterChange}
            data={hpFilterData}
            initialValue={hpFilterData[0].title}
          />
        </div>
      )}
      {isLoading ? <RectangularCardSkeleton /> : <RoomBody />}
    </div>
  );
};

export default Room;
