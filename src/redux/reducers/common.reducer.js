import {
  SET_LUCIFER_QUOTES,
  SET_NOBEL_PRIZES_DATA,
  SET_TESTIMONIAL_DATA,
  SET_COUNTRY_LIST,
  SET_NEWS_FEED
} from "redux/constants/common";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  luciferQuotes: [],
  testimonialData: [],
  nobelPrizesData: [],
  countryList: [],
  newsFeedList: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LUCIFER_QUOTES:
      return {
        ...state,
        luciferQuotes: payload
      };
    case SET_TESTIMONIAL_DATA:
      return {
        ...state,
        testimonialData: payload
      };
    case SET_NOBEL_PRIZES_DATA:
      return {
        ...state,
        nobelPrizesData: payload
      };
    case SET_COUNTRY_LIST:
      return {
        ...state,
        countryList: payload
      };
    case SET_NEWS_FEED:
      return {
        ...state,
        newsFeedList: payload
      };
    default:
      return state;
  }
};
