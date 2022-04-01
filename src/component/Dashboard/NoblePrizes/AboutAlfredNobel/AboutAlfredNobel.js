import React from 'react';

import AlfredNobelImage from '../../../../assets/images/noblePrize/alfredNobel.jpg';

import styles from './AboutAlfredNobel.module.scss';

const AboutAlfredNobel = () => {

  const alfredNobelImageAttributes = {
    className: styles.alfredImage,
    src: AlfredNobelImage
  };

  const findOutMoreControlAttributes = {
    href: 'https://www.nobelprize.org/alfred-nobel/biographical-information/',
    target: '_blank',
    className: styles.findOutMoreControl
  };

  return (
    <div className={styles.container}>

      <div className={'text-center'}>
        <img {...alfredNobelImageAttributes} alt={'alfred-nobel'} />
      </div>

      <p>Alfred Bernhard Nobel was a Swedish chemist, engineer, inventor, businessman, and
        philanthropist. He is best known for having bequeathed his fortune to establish the
        Nobel Prize, though he also made several important contributions to science, holding
        355 patents in his lifetime. Nobel's most famous invention was dynamite, a safer and
        easier means of harnessing the explosive power of nitroglycerin; it was patented in
        1867 and was soon used worldwide for mining and infrastructure development.</p>
      <p>Nobel displayed an early aptitude for science and learning, particularly in chemistry
        and languages; he became fluent in six languages and filed his first patent at age 24.
        He embarked on many business ventures with his family, most notably owning Bofors, an
        iron and steel producer that he developed into a major manufacturer of cannons and other
        armaments.</p>
      <p>After reading an erroneous obituary condemning him as a war profiteer, Nobel was
        inspired to bequeath his fortune to the Nobel Prize institution, which would annually
        recognize those who "conferred the greatest benefit to humankind". The synthetic
        element nobelium was named after him, and his name and legacy also survives in
        companies such as Dynamit Nobel and AkzoNobel, which descend from mergers with
        companies he founded.</p>

      <a  {...findOutMoreControlAttributes}>Find out more about Alfred's life </a>

    </div>
  );
};

export default AboutAlfredNobel;