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
  let bytes = CryptoJs.AES.decrypt(userFromStorage, config.ENCRYPTION_KEY);
  let decryptedData = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
  return decryptedData;
};

export const removeDataFromLocalStorage = () => {
  localStorage.removeItem("user_info");
};
