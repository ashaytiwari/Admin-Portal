import { SET_USER_PROFILE } from "redux/constants/profile";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  userProfile: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload
      };
    default:
      return state;
  }
};