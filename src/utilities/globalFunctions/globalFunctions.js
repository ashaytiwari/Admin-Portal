/* eslint-disable array-callback-return */
import CryptoJs from "crypto-js";
import config from "../../config/config.json";

import ChemistryLogo from 'assets/images/noblePrize/chemistry.png';
import LiteratureLogo from 'assets/images/noblePrize/literature.png';
import PhysicsLogo from 'assets/images/noblePrize/physics.png';
import PeaceLogo from 'assets/images/noblePrize/peace.png';
import PhysiologyLogo from 'assets/images/noblePrize/physiology.png';

export const setLocalStorage = (data) => {
  let cipherData = CryptoJs.AES.encrypt(
    JSON.stringify(data),
    config.ENCRYPTION_KEY
  ).toString();
  localStorage.setItem("user_info", cipherData);
};

export const getLocalStorage = () => {
  let userFromStorage = localStorage.getItem("user_info");
  if (userFromStorage) {
    let bytes = CryptoJs.AES.decrypt(userFromStorage, config.ENCRYPTION_KEY);
    let decryptedData = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
    return decryptedData;
  } else {
    return userFromStorage;
  }
};

export const removeDataFromLocalStorage = () => {
  localStorage.removeItem("user_info");
};

export const extractAvatarCharactersFromName = (name) => {
  let avatarString = "";
  if (name) {
    name
      .split(" ")
      .slice(0, 2)
      .map((item) => {
        avatarString = avatarString + item[0];
      });
  }
  return avatarString;
};

export const dynamicBGColorToCardAvatar = (houseName) => {
  switch (houseName) {
    case "Gryffindor":
      return "#cc3422";
    case "Slytherin":
      return "#3e8d20";
    case "Hufflepuff":
      return "#e3be29";
    case "Ravenclaw":
      return "#078aae";
    default:
      return "#ab9c86";
  }
};

export const extractCharacterType = (isStudent, isStaff) => {
  if (isStudent) return "Hogwarts Student";
  else if (isStaff) return "Hogwarts Staff";
  else return "Outsider";
};

export const translatedNameForHPHouse = (key, t) => {
  switch (key) {
    case "gryffindor":
      return t("hp:gryffindor");
    case "slytherin":
      return t("hp:slytherin");
    case "ravenclaw":
      return t("hp:ravenclaw");
    case "hufflepuff":
      return t("hp:hufflepuff");
    case "commonRoom":
      return t("hp:commonRoom");
    default:
      return null;
  }
};

export const generateRandomNumber = (min, max) => {
  let randomNumber = Math.random();
  let updatedNumber = Math.floor(randomNumber * (max - min + 1) + min);
  return updatedNumber;
};

export const translateFeatureNameForBD = (key, t) => {
  switch (key) {
    case "Episodes":
      return t("breakingBad:episodes");
    case "Characters":
      return t("breakingBad:characters");
    case "Quotes":
      return t("breakingBad:quotes");
    default:
      return null;
  }
};

export const extractLaureatesNameAsString = (laureates) => {

  const laureatesNamesArray = [];
  const laureatesLength = laureates.length;

  for (let index = 0; index < laureatesLength; index++) {

    const laureateName = laureates[index].knownName;

    if (typeof laureateName === 'undefined') {
      continue;
    }

    laureatesNamesArray.push(laureateName.en);
  }

  const laureatesName = laureatesNamesArray.join(', ');

  return laureatesName;

};

export const extractLaureatesMotivationAsString = (laureates) => {

  const laureatesMotivationArray = [];
  const laureatesLength = laureates.length;

  for (let index = 0; index < laureatesLength; index++) {

    const laureateMotivation = laureates[index].motivation;

    if (typeof laureateMotivation === 'undefined') {
      continue;
    }

    laureatesMotivationArray.push(`<span>&#8220; ${laureateMotivation.en} &#8221</span>`);
  }

  const laureatesName = laureatesMotivationArray.join(' | ');

  return laureatesName;

};

export const decidePrizeLogoPathBasedOnCategory = (category) => {

  const categoryName = category.en;

  switch (categoryName) {
    case 'Chemistry':
      return ChemistryLogo;
    case 'Literature':
      return LiteratureLogo;
    case 'Peace':
      return PeaceLogo;
    case 'Physics':
      return PhysicsLogo;
    default:
      return PhysiologyLogo;
  }

};

export const generateRandomHexadecimalColorCode = () => {

  let code = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexCode = '#';

  for (let index = 0; index < 6; index++) {

    let randomIndexNumber = Math.floor(Math.random() * 9);

    hexCode += code[randomIndexNumber];

  }

  return hexCode;
};
