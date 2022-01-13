import React, { useState, useEffect, useCallback } from "react";
import styles from "./LuciferQuotes.module.scss";
import LuciferLogo from "../../../assets/images/lucifer/luciferLogo.png";
import LuciferQuotesBody from "../../../component/Dashboard/LuciferQuotes/LuciferQuotesBody";
import { getLuciferQuotes } from "../../../services/luciferServices";
import { useDispatch } from "react-redux";
import { setLuciferQuotes } from "../../../redux/actions/luciferQuotes.actions";
import { useSnackbar } from "notistack";

const LuciferQuotes = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const getLuciferQuotesData = useCallback(() => {
    setIsLoading(true);
    getLuciferQuotes().then((res) => {
      if (res.status === 200) {
        dispatch(setLuciferQuotes(res.data));
        setIsLoading(false);
      } else {
        setIsLoading(false);
        enqueueSnackbar(res.statusText, { variant: "error" });
      }
    });
  }, [dispatch, enqueueSnackbar]);

  useEffect(() => {
    getLuciferQuotesData();
  }, [getLuciferQuotesData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Lucifer Quotes</h4>
        <img src={LuciferLogo} alt={"lucifer-logo"} />
      </div>
      <LuciferQuotesBody
        regenrateQuote={getLuciferQuotesData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default LuciferQuotes;
