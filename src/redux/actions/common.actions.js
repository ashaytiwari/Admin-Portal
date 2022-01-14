import { SET_LUCIFER_QUOTES, SET_TESTIMONIAL_DATA } from "../constants/common";

export const setLuciferQuotes = (data) => async (dispatch) => {
  dispatch({
    type: SET_LUCIFER_QUOTES,
    payload: data
  });
};

export const setTestimonialData = (data) => async (dispatch) => {
  dispatch({
    type: SET_TESTIMONIAL_DATA,
    payload: data
  });
};
