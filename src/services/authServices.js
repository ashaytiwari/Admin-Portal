import axios from "../axios/axios";

const baseUrl = 'http://localhost:8080/';

export const loginService = async (data) => {
  const url = baseUrl + "commanloginuser";
  const res = await axios.post(url, data);
  return res;
};

export const registrationService = async (data) => {
  const url = baseUrl + "signup";
  const res = await axios.post(url, data);
  return res;
};

export const forgotPassword = async (data) => {
  const url = baseUrl + "commanforgotpassword";
  const res = await axios.post(url, data);
  return res;
};

export const resetPassword = async (data) => {
  const url = baseUrl + "commanresetpassword";
  const res = await axios.post(url, data);
  return res;
};
