/* eslint-disable import/no-anonymous-default-export */

import { SET_BD_CHARACTERS, SET_BD_EPISODES } from "../constants/breakingBad";

const initialState = {
  bdEpisodes: [],
  bdCharacters: []
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
    default:
      return state;
  }
};
