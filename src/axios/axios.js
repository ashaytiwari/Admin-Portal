import axios from "axios";

const customAxios = axios.create({});

const requestHandler = (request) => {
  // console.log(request, " <<<<<<<<<<<<<<<<<<request ");
  return request;
};

const responseHandler = (response) => {
  // console.log(response, " <<<<<<<<<<<<<<<<<<response ");
  return response;
};

const errorHandler = (error) => {
  console.log(error, " <<<<<<<<<<<<<<<<<<error ");
  // window.location = "/error";
  // return error;
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
