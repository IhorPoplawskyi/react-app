import axios from "axios";

export const userAPI = {
  getUsers(currentPage) {
    return axios
    .get(`https://reqres.in/api/users?page=${currentPage}`)
    .then(response => response.data)
  },
  getProfile(user) {
    return axios.get(`https://reqres.in/api/users/${user}`)
  }
};