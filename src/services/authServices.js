import axios from "../axios/axios";

export const loginService = async (data) => {
  const url = "https://beelytical.kritin.tech/api/commanloginuser";
  const res = await axios.post(url, data);
  return res;
};

export const registrationService = async (data) => {
  const url = "https://beelytical.kritin.tech/api/signup";
  const res = await axios.post(url, data);
  return res;
};

export const forgotPassword = async (data) => {
  const url = "https://beelytical.kritin.tech/api/commanforgotpassword";
  const res = await axios.post(url, data);
  return res;
};

export const resetPassword = async (data) => {
  const url = "https://beelytical.kritin.tech/api/commanresetpassword";
  const res = await axios.post(url, data);
  return res;
};
