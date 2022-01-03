/* eslint-disable array-callback-return */
import CryptoJs from "crypto-js";
import config from "../../config/config.json";

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
