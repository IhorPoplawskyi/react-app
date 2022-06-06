import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {'API-KEY' : 'e2c3b74f-5822-49ff-8ad1-b2c4ddfc80a9'},
  baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  },
  getProfile(user) {
    return instance.get(`profile/${user}`)
  },
};