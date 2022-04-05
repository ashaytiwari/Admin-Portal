import { SET_LUCIFER_QUOTES, SET_NOBEL_PRIZES_DATA, SET_TESTIMONIAL_DATA } from "redux/constants/common";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  luciferQuotes: [],
  testimonialData: [],
  nobelPrizesData: []
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
    default:
      return state;
  }
};
