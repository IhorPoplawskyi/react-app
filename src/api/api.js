import axios from "axios";

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{
      withCredentials: true,
    })
    .then(response => response.data)
  },
  getProfile(user) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${user}`)
  },
};