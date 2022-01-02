import { SET_BD_CHARACTERS, SET_BD_EPISODES } from "../constants/breakingBad";

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
