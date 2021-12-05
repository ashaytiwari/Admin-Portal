import customAxios from "../../axios/axios";

export const loginService = () => {
  console.log("Hello");
  customAxios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      console.log(res);
    });
};
