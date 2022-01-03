import {
  SET_BD_CHARACTERS,
  SET_BD_EPISODES,
  SET_BD_QUOTE
} from "../constants/breakingBad";

export const setBDEpisodes = (data) => async (dispatch) => {
  dispatch({
    type: SET_BD_EPISODES,
    payload: data
  });
};

export const setBDCharacters = (data) => async (dispatch) => {
  dispatch({
    type: SET_BD_CHARACTERS,
    payload: data
  });
};

export const setBDQuote = (data) => async (dispatch) => {
  dispatch({
    type: SET_BD_QUOTE,
    payload: data
  });
};
