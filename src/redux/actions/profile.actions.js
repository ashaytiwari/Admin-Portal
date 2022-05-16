import { SET_USER_PROFILE } from "redux/constants/profile";

export const setUserProfile = (data) => async (dispatch) => {
  dispatch({
    type: SET_USER_PROFILE,
    payload: data
  });
};