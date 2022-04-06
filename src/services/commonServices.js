import { countryData } from "assets/data/countryData";

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

export const getNobelPrizesListByPageNumber = async (pageNumber) => {

  const url = `http://masterdataapi.nobelprize.org/2.1/nobelPrizes?offset=${pageNumber}&limit=25`;

  const res = await axios.get(url);

  return res;

};

export const getCountryList = async () => {

  const res = {
    status: 200,
    data: countryData
  };

  return res;

};
