import React from "react";
import styles from "./LuciferQuotesBody.module.scss";
import Button from "../../UI/Button/Button";
import { useTranslation } from "react-i18next";
import RedBackground from "../../../assets/images/bg/redBackground.jpg";
import { useSelector } from "react-redux";
import QuoteCard from "../../QuoteCard/QuoteCard";

const LuciferQuotesBody = (props) => {
  const { t } = useTranslation();

  const quote = useSelector((state) => state.luciferQuotes.luciferQuotes[0]);

  return (
    <div className={styles.luciferBody}>
      <Button className={styles.btn} onClick={props.regenrateQuote}>
        {t("breakingBad:regenerateQuote")}
      </Button>
      <QuoteCard
        isLoading={props.isLoading}
        quote={quote?.quote}
        author={quote?.author}
        backgroundSrc={RedBackground}
      />
    </div>
  );
};

export default LuciferQuotesBody;
