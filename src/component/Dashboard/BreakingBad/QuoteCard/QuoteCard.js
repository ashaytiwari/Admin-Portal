import React from "react";
import styles from "./QuoteCard.module.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Quote2BG from "../../../../assets/images/bg/landscapeBG.jpg";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const QuoteCard = (props) => {
  const quote = useSelector((state) => state.breakingBad.bdQuote[0]);

  return (
    <div className={styles.quoteCard}>
      <img src={Quote2BG} alt={"quote-bg"} />
      {props.isLoading ? (
        <div>
          <BeatLoader size={25} color="#fff" />
        </div>
      ) : (
        <div>
          <FormatQuoteIcon className={styles.icon} />
          <h3>{quote?.quote}</h3>
          <p>- {quote?.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
