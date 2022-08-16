import axios from "axios/axios";

export const getUserProfileInformation = async (id) => {

  const url = `http://localhost:8080/userprofile?user_id=${id}`;

  const res = await axios.get(url);

  return res;

};

export const uploadFile = async (param) => {

  const url = 'http://localhost:8080/fileupload';

  const res = await axios.post(url, param, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return res;

};

export const updateUserProfile = async (param) => {

  const url = 'http://localhost:8080/updatestudentprofilepicture';

  const res = await axios.post(url, param);

  return res;
};