import axios from "../axios/axios";

export const getLuciferQuotes = async (query) => {
  const url = `https://lucifer-quotes.vercel.app/api/quotes`;
  const res = await axios.get(url);
  return res;
};

export const getTestimonialData = async (query) => {
  const url = `https://testimonialapi.toolcarton.com/api`;
  const res = await axios.get(url);
  return res;
};
