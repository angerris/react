import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "8b19b956-586d-451c-ba49-1e86c2365399",
  },
});
export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((res) => {
      return res.data;
    });
};
export const followUsers = (userID) => {
  return instance.post(`follow/${userID}`, {}).then((res) => {
    return res.data;
  });
};
export const unfollowUsers = (userID) => {
  return instance.delete(`follow/${userID}`).then((res) => {
    return res.data;
  });
};
export const getProfile = (profileId) => {
  return instance.get(`profile/${profileId}`).then((res) => {
    return res.data;
  });
};