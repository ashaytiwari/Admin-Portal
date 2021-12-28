import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Room.module.scss";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useLocation, useNavigate } from "react-router-dom";
import { getCharacters } from "../../../../services/harryPotterServices";
import { useDispatch } from "react-redux";
import { setHPCharacters } from "../../../../redux/actions/harryPotter.actions";
import { useSnackbar } from "notistack";

const Room = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [queryType, setQueryType] = useState(null);

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryType]);

  const getHPCharacters = () => {
    getCharacters(queryType).then((res) => {
      if (res?.status === 200) {
        dispatch(setHPCharacters(res?.data));
      } else {
        enqueueSnackbar(res?.statusText, { variant: "error" });
      }
    });
  };

  return (
    <div className={styles.roomWrapper}>
      <div className={styles.header}>
        <div>
          <IconButton className={styles.backBtn} onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <h4>{location.state?.title}</h4>
        </div>
        <img src={location.state?.image} alt={"house-logo"} />
      </div>
    </div>
  );
};

export default Room;
