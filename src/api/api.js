import axios from "axios";

export const getUsers = (currentPage) => {
  return axios
    .get(`https://reqres.in/api/users?page=${currentPage}`)
    .then(response => response.data)
};
