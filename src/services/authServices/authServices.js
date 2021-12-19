import axios from "../../axios/axios";

export const loginService = async (data) => {
  const url = "https://develop.hipoz.com/api/commanloginuser";
  const res = await axios.post(url, data);
  return res;
};

export const registrationService = async (data) => {
  const url = "https://develop.hipoz.com/api/signup";
  const res = await axios.post(url, data);
  return res;
};
