import React from "react";
import styles from "./BreakingBadHome.module.scss";
import BreakingLogo from "../../../../assets/images/breakingBad/breaking.png";
import Poster from "../../../../assets/images/breakingBad/poster.jpg";

const BreakingBadHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Breaking Bad</h4>
        <img src={BreakingLogo} alt={"breaking-bad-logo"} />
      </div>
      <div className={styles.body}>
        <div className={"text-center"}>
          <img src={Poster} alt={"breaking-bad-poster"} />
        </div>
        <h5>About</h5>
        <p>
          Breaking Bad is an American neo-Western crime drama television series
          created and produced by Vince Gilligan. The show aired on AMC from
          January 20, 2008, to September 29, 2013, consisting of five seasons
          for a total of 62 episodes. It was set and filmed in Albuquerque, New
          Mexico, and tells the story of Walter White (Bryan Cranston), an
          underpaid, overqualified, and dispirited high school chemistry teacher
          who is struggling with a recent diagnosis of stage-three lung cancer.
        </p>
        <p>
          White turns to a life of crime, partnering with his former student
          Jesse Pinkman (Aaron Paul), by producing and distributing crystal meth
          to secure his family's financial future before he dies, while
          navigating the dangers of the criminal underworld.
        </p>{" "}
        <p>
          {" "}
          Breaking Bad is regarded as one of the greatest television series of
          all time, and with 16 Primetime Emmy Awards.
        </p>
      </div>
    </div>
  );
};

export default BreakingBadHome;
