import axios from "../axios/axios";

export const getLuciferQuotes = async (query) => {
  const url = `https://lucifer-quotes.vercel.app/api/quotes`;
  const res = await axios.get(url);
  return res;
};
