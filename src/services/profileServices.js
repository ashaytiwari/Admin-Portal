import axios from "axios/axios";

export const getUserProfileInformation = async (id) => {

  const url = `https://beelytical.kritin.tech/api/userprofile?user_id=${id}`;

  const res = await axios.get(url);

  return res;

};