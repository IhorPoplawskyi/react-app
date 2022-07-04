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
  follow(user) {
    return instance.delete(`follow/${user}`)
  },
  unfollow(user) {
    return instance.post(`follow/${user}`)
  },
  authMe() {
    return instance.get(`auth/me`)
  }
};

export const profileAPI = {
  getProfile(user) {
    return instance.get(`profile/${user}`)
  },
  getStatus(user) {
    return instance.get(`profile/status/${user}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
  },
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },
  loginMe(email, password, rememberMe) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logoutMe() {
    return instance.delete('auth/login')
  }
};