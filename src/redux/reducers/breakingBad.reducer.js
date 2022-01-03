/* eslint-disable import/no-anonymous-default-export */

import {
  SET_BD_CHARACTERS,
  SET_BD_EPISODES,
  SET_BD_QUOTE
} from "../constants/breakingBad";

const initialState = {
  bdEpisodes: [],
  bdCharacters: [],
  bdQuote: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BD_EPISODES:
      return {
        ...state,
        bdEpisodes: payload
      };
    case SET_BD_CHARACTERS:
      return {
        ...state,
        bdCharacters: payload
      };
    case SET_BD_QUOTE:
      return {
        ...state,
        bdQuote: payload
      };
    default:
      return state;
  }
};
