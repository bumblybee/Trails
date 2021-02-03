import { get, post } from "./baseApi";

export const getUser = async () => {
  const res = await get("/users/current");
  return res;
};

export const signupUser = async (data) => {
  const res = await post("/users/signup", data);
  return res;
};

export const loginUser = async (data) => {
  const res = await post("/users/login", data);
  return res;
};

export const logoutUser = async () => {
  const res = await post("/users/logout");
  return res;
};

export const triggerPasswordReset = async (email) => {
  return await post(`/users/reset-password`, { email });
};

export const resetPassword = async (token, password) => {
  return await post(`/users/reset-password/${token}`, { password });
};

export const bookmarkTrail = async (trailId) => {
  const res = await post(`/users/bookmark/${trailId}`);
  return res.data;
};

export const removeBookmark = async (trailId) => {
  const res = await post(`/users/remove-bookmark/${trailId}`);
  return res.data;
};
