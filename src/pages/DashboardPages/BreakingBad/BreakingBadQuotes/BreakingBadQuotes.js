import React, { useEffect, useState } from "react";
import styles from "./BreakingBadQuotes.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import { generateRandomNumber } from "../../../../utilities/globalFunctions/globalFunctions";
import { getBDQuotes } from "../../../../services/breakingBadServices";
import Button from "../../../../component/UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setBDQuote } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import QuoteCard from "../../../../component/QuoteCard/QuoteCard";
import { useTranslation } from "react-i18next";
import BackNavigationSubHeader from "../../../../component/Headers/BackNavigationSubHeader/BackNavigationSubHeader";
import QuoteBG from "../../../../assets/images/bg/landscapeBG.jpg";

const BreakingBadQuotes = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const quote = useSelector((state) => state.breakingBad.bdQuote[0]);

  useEffect(() => {
    getRandomQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomQuote = () => {
    setIsLoading(true);
    let randomQuoteId = generateRandomNumber(1, 100);
    getBDQuotes(randomQuoteId).then((res) => {
      if (res.status === 200) {
        if (res.data.length === 0) {
          getRandomQuote(); // again call get random quote function if quote curl is empty
        } else {
          dispatch(setBDQuote(res.data));
          setIsLoading(false);
        }
      } else {
        enqueueSnackbar(res.statusText, { variant: "error" });
        setIsLoading(false);
      }
    });
  };

  return (
    <div className={styles.container}>
      <BackNavigationSubHeader
        title={t("breakingBad:breakingBadQuotes")}
        src={BreakingLogo}
      />
      <div className={styles.body}>
        <Button className={styles.btn} onClick={getRandomQuote}>
          {t("breakingBad:regenerateQuote")}
        </Button>
        <QuoteCard
          isLoading={isLoading}
          quote={quote?.quote}
          author={quote?.author}
          backgroundSrc={QuoteBG}
        />
      </div>
    </div>
  );
};

export default BreakingBadQuotes;
