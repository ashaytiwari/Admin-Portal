import React from "react";
import styles from "./QuoteCard.module.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { BeatLoader } from "react-spinners";

const QuoteCard = (props) => {
  return (
    <div className={styles.quoteCard}>
      <img src={props.backgroundSrc} alt={"quote-bg"} />
      {props.isLoading ? (
        <div>
          <BeatLoader size={25} color="#fff" />
        </div>
      ) : (
        <div>
          <FormatQuoteIcon className={styles.icon} />
          <h3>{props.quote}</h3>
          <p>- {props.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
