import axios from "../axios/axios";

export const getBDEpisodes = async () => {
  const url = `https://breakingbadapi.com/api/episodes`;
  const res = await axios.get(url);
  return res;
};

export const getBDCharacters = async () => {
  const url = `https://breakingbadapi.com/api/characters`;
  const res = await axios.get(url);
  return res;
};
