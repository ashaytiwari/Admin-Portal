import { SET_LUCIFER_QUOTES } from "../constants/luciferQuotes";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  luciferQuotes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LUCIFER_QUOTES:
      return {
        ...state,
        luciferQuotes: payload
      };
    default:
      return state;
  }
};
