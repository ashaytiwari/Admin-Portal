import { SET_LUCIFER_QUOTES } from "../constants/luciferQuotes";

export const setLuciferQuotes = (data) => async (dispatch) => {
  dispatch({
    type: SET_LUCIFER_QUOTES,
    payload: data
  });
};
