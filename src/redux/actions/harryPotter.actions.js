import { SET_HP_CHARACTERS } from "../constants/harryPotter";

export const setHPCharacters = (data) => async (dispatch) => {
  dispatch({
    type: SET_HP_CHARACTERS,
    payload: data
  });
};
