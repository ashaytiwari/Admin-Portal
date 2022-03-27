import React from 'react';

import NoblePrizeBanner from '../../../../assets/images/noblePrize/noblePrize.jpg';

import styles from './AboutNoblePrizes.module.scss';

const AboutNoblePrizes = () => {
  return (
    <div className={styles.body}>
      <div className={"text-center"}>
        <img src={NoblePrizeBanner} alt={"breaking-bad-poster"} />
      </div>
      <h5>About</h5>
      <p>The Nobel Prizes are five separate prizes that, according to Alfred Nobel's will of
        1895, are awarded to "those who, during the preceding year, have conferred the greatest
        benefit to Mankind." Alfred Nobel was a Swedish chemist, engineer, and industrialist
        most famously known for the invention of dynamite. He died in 1896. In his will, he
        bequeathed all of his "remaining realisable assets" to be used to establish five prizes
        which became known as "Nobel Prizes." Nobel Prizes were first awarded in 1901.</p>
      <p>Nobel Prizes are awarded in the fields of Physics, Chemistry, Physiology or Medicine,
        Literature, and Peace (Nobel characterized the Peace Prize as "to the person who has
        done the most or best to advance fellowship among nations, the abolition or reduction
        of standing armies, and the establishment and promotion of peace congresses").
        In 1968, Sveriges Riksbank (Sweden's central bank) funded the establishment of the
        Prize in Economic Sciences in Memory of Alfred Nobel, to also be administered by the
        Nobel Foundation. Nobel Prizes are widely regarded as the most prestigious
        awards available in their respective fields.</p>
      <p>The prize ceremonies take place annually. Each recipient (known as a "laureate")
        receives a gold medal, a diploma, and a monetary award. In 2021, the Nobel Prize
        monetary award is 10,000,000 SEK. A prize may not be shared among more than three
        individuals, although the Nobel Peace Prize can be awarded to organizations of more
        than three people. Although Nobel Prizes are not awarded posthumously, if a person
        is awarded a prize and dies before receiving it, the prize is presented.</p>
    </div>
  )
}

export default AboutNoblePrizes;