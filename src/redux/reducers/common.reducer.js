import { SET_LUCIFER_QUOTES, SET_TESTIMONIAL_DATA } from "../constants/common";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  luciferQuotes: [],
  testimonialData: []
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
    default:
      return state;
  }
};
