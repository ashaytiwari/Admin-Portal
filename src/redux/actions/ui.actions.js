import { RESET_PAGINATION } from "../constants/ui";

export const handleResetPagination = (data) => async (dispatch) => {
  dispatch({
    type: RESET_PAGINATION,
    payload: data
  });
};
