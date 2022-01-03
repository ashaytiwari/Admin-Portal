import React, { useEffect, useState } from "react";
import styles from "./BreakingBadQuotes.module.scss";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import { generateRandomNumber } from "../../../../utils/globalFunctions/globalFunctions";
import { getBDQuotes } from "../../../../services/breakingBadServices";
import Button from "../../../../component/UI/Button/Button";
import { useDispatch } from "react-redux";
import { setBDQuote } from "../../../../redux/actions/breakingBad.actions";
import { useSnackbar } from "notistack";
import QuoteCard from "../../../../component/Dashboard/BreakingBad/QuoteCard/QuoteCard";

const BreakingBadQuotes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

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
      <div className={styles.header}>
        <div>
          <IconButton className={styles.backBtn} onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <h4>Breaking Bad Famous Quotes</h4>
        </div>
        <img src={BreakingLogo} alt={"house-logo"} />
      </div>
      <div className={styles.body}>
        <Button className={styles.btn} onClick={getRandomQuote}>
          Re-generate Quote
        </Button>
        <QuoteCard isLoading={isLoading} />
      </div>
    </div>
  );
};

export default BreakingBadQuotes;
