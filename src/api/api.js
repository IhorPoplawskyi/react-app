import axios from "axios";

export const userAPI = (currentPage) => {
  return axios
    .get(`https://reqres.in/api/users?page=${currentPage}`)
    .then(response => response.data)
};