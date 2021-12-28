import axios from "../axios/axios";

export const getCharacters = async (query) => {
  const url = `http://localhost:4000/harryPotter/characters?queryType=${query}`;
  const res = await axios.get(url);
  return res;
};
