/* eslint-disable import/no-anonymous-default-export */
import { SET_HP_CHARACTERS } from "../constants/harryPotter";

const initialState = {
  hpCharacters: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HP_CHARACTERS:
      return {
        ...state,
        hpCharacters: payload
      };
    default:
      return state;
  }
};
