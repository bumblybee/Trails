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
