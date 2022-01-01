/* eslint-disable import/no-anonymous-default-export */

import { SET_BD_EPISODES } from "../constants/breakingBad";

const initialState = {
  bdEpisodes: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BD_EPISODES:
      return {
        ...state,
        bdEpisodes: payload
      };
    default:
      return state;
  }
};
