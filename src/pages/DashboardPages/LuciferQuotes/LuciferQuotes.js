import React, { useState, useEffect, useCallback } from "react";
import styles from "./LuciferQuotes.module.scss";
import LuciferLogo from "../../../assets/images/lucifer/luciferLogo.png";
import LuciferQuotesBody from "../../../component/Dashboard/LuciferQuotes/LuciferQuotesBody";
import { getLuciferQuotes } from "../../../services/commonServices";
import { useDispatch } from "react-redux";
import { setLuciferQuotes } from "../../../redux/actions/common.actions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

const LuciferQuotes = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

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
        <h4>{t("common:luciferQuote")}</h4>
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
