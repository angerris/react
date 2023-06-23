import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "8b19b956-586d-451c-ba49-1e86c2365399",
  },
});
export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => {
        return res.data;
      });
  },
  followUsers(userID) {
    return instance.post(`follow/${userID}`, {}).then((res) => {
      return res.data;
    });
  },
  unfollowUsers(userID) {
    return instance.delete(`follow/${userID}`).then((res) => {
      return res.data;
    });
  },
};
export const profileAPI = {
  getProfile(profileId) {
    return instance.get(`profile/${profileId}`).then((res) => {
      return res.data;
    });
  },
};

export const authAPI = {
  me() {
    return instance
      .get(`auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        return res.data;
      });
  },
};
