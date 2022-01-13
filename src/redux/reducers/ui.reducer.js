import { RESET_PAGINATION } from "../constants/ui";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  resetPagination: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_PAGINATION:
      return {
        ...state,
        resetPagination: payload
      };
    default:
      return state;
  }
};
