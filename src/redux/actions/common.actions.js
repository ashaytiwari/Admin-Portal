import {
  SET_COUNTRY_LIST,
  SET_LUCIFER_QUOTES,
  SET_NOBEL_PRIZES_DATA,
  SET_TESTIMONIAL_DATA
} from "redux/constants/common";

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

export const setNobelPrizesData = (data) => async (dispatch) => {
  dispatch({
    type: SET_NOBEL_PRIZES_DATA,
    payload: data
  });
};

export const setCountryList = (data) => async (dispatch) => {
  dispatch({
    type: SET_COUNTRY_LIST,
    payload: data
  });
};
