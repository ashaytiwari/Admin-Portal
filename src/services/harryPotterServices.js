import axios from "../axios/axios";

export const getCharacters = async (query) => {
  const url = `https://admin-portal-services.herokuapp.com/harryPotter/characters?queryType=${query}`;
  const res = await axios.get(url);
  return res;
};
